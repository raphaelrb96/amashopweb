'use client'
import React, { useEffect, useState } from 'react';
import { Typography, Button, Stepper, Step, StepLabel, Grid, Divider, styled, Card, Container, Box } from '@mui/material';
import CarrinhoDois from '../../components/Checkout/CarrinhoDois';
import RootLayout from './layout';
import ResponsiveAppBar from '../../components/Headers/ResponsiveAppBar';
import CheckoutUm from '../../components/Checkout/CheckoutUm';
import RodapeUm from '../../components/Rodape/RodapeUm';
import { ProdutoType } from '../../types/ProdutoType';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getProduto } from '../../fetchData/getProduto';
import Pb from '../../components/Pb';
import { useUser } from '../../context/userContext';
import { ItemCart } from '../../types/ItemCart';
import { getCartList } from '../../fetchData/cartServices';
import { DocumentData } from 'firebase/firestore';
import RodapeCheckout from '../../components/Rodape/RodapeCheckout';
import Topo from '../../components/Topo';
import { CompraObj } from '../../types/CompraObj';
import { registerOrder } from '../../fetchData/orderServices';


interface FormValues {
  name: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  district: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  paymentMethod: string;
  observations: string;
}

// Definindo a interface para os itens do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Dados fictícios dos itens no carrinho
const itemsInCart: CartItem[] = [
  { id: 1, name: 'Produto 1', price: 10, quantity: 2 },
  { id: 2, name: 'Produto 2', price: 15, quantity: 1 },
  { id: 3, name: 'Produto 3', price: 20, quantity: 3 },
];

// Container principal da tela
const ContainerGrid = styled(Grid)`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  justify-content: space-around;
  align-items: flex-start;
`;

// Container do Carrinho com estilo próprio
const CartContainer = styled(Grid)`
  background-color: #f5f5f5;
  padding: 20px;
`;

// Container do Checkout com estilo próprio
const CheckoutContainer = styled(Grid)`
  padding: 20px;
`;

const Spacing = styled(Grid)`
  order: 2;
`;

// Estilo para os títulos
const TitleHeader = styled(Typography)`
  //font-size: 24px;
  font-family: sans-serif;
`;

// Estilo para os subtítulos
const Subtitle = styled(Typography)`
  font-size: 20px;
  margin-bottom: 10px;
`;

// Estilo para os itens do carrinho
const CartItemText = styled(Typography)`
  font-size: 18px;
`;

const Headline = styled(Typography)`
  font-family: 'Lato', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #228d57;
  text-align: center;
  margin-bottom: 40px;
`;

const itemCompraNovo = (produto: ProdutoType | DocumentData | any): ItemCart => {

  let prd = {
    loja: produto.loja,
    lojaLogo: produto.lojaLogo,
    idLoja: produto.idLoja,
    id: produto.id,
    nome: produto.nome,
    fotoPrincipal: produto.fotoPrincipal,
    peso: produto.peso,
    largura: produto.largura,
    altura: produto.altura,
    comprimento: produto.comprimento,
    valor: Number(produto.valor),
    garantia: produto.garantia,
    modelo: '',
    quantidade: 1,
    comissao: Number(produto.comissao),
    cashback: Number(produto.cashback),
    idItem: ''

  };

  return prd;
};

const novoPedido = (values: FormValues, list: ItemCart[] | undefined | null, uid: string): CompraObj | null => {

  if (!list) return null;

  let taxaEntrega = 10;
  let subtotal = 0;
  let comissaoTotal = 0;
  let cashbackTotal = 0;

  list.map(item => {

    const { valor, quantidade, comissao, cashback } = item;

    let itemTotal = (quantidade * valor);
    let itemComissaoTotal = (quantidade * comissao);
    let itemCashback = (quantidade * cashback);
    subtotal = subtotal + itemTotal;
    comissaoTotal = comissaoTotal + itemComissaoTotal;
    cashbackTotal = cashbackTotal + itemCashback;

  });

  let formPag = 3;
  switch (values.paymentMethod) {
    case 'pix':
      formPag = 6;
      break;
    case 'dinheiro':
      formPag = 2;
      break;
    default:
      formPag = 3;
      break;
  }


  return {
    endereco: {
      rua: values.street,
      numero: values.number,
      bairro: values.district,
      cep: values.postalCode,
      cidade: values.city,
      estado: values.state,
      pais: values.country,
      complemento: ''
    },
    nomeCliente: values.name,
    contatoCliente: values.phone,
    email: values.email,

    //dados de padroes
    hora: Date.now(),
    id: '',
    status: 1,

    //itens e somas da compra
    itensCompra: list,
    comissao: Number(comissaoTotal),
    cashback: Number(cashbackTotal),
    subtotal: Number(subtotal),
    total: Number(subtotal + taxaEntrega),

    //taxas variaveis
    taxaEntrega: taxaEntrega,
    taxaParcelamento: 0,

    //dados de pagamento da compra
    formaDePagamento: formPag,
    pagamentoOnline: false,
    parcelamento: {
      numero: 1,
      descricao: ''
    },
    statusPagamento: 0,

    //dados do vendedor
    uidVendedor: '',
    nomeVendedor: '',
    apelidoVendedor: '',
    comissaoPaga: false,

    //dados do cliente
    uidCliente: uid,
    pagamento: {
      charges: [],
      status: '',
      hora: 0,
    }
  };

};

const CheckoutScreen: React.FC = () => {

  const routerPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loadingUser, getUidUserWithEmailAuth } = useUser();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [produto, setProduto] = useState<ProdutoType | any | null>(undefined);
  const [itensCart, setItensCart] = useState<ItemCart[] | undefined | null>(undefined);
  const [loadFinish, setLoadFinish] = useState<boolean>(false);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const concluirPedido = async (value: FormValues) => {
    if (loadFinish) return;
    setLoadFinish(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const { email, name, phone } = value;
    const uidUserAuth = await getUidUserWithEmailAuth(email, name, phone);
    const isCart = !Boolean(produto);
    const objOrder = novoPedido(value, itensCart, uidUserAuth);
    if (!objOrder) return;
    const sucessRegister = await registerOrder(objOrder, isCart, user.uid);
    if (sucessRegister) {
      router.replace('/compra-confirmada');
    }
  };


  useEffect(() => {

    if (!searchParams.has('prod')) {
      //setProduto(-1);


      if ((!user || !user?.uid) && !loadingUser) {

        router.push('/');
        return;

      } else if (!user || !user?.uid) {
        return;
      } else {

        const fetchCart = async () => {
          getCartList(user.uid, list => {
            console.log(list)
            if (list.length > 0) {
              setItensCart(list);
            } else {
              setItensCart(null);
              setProduto(null);
            }
          })
        };

        fetchCart();

      }

      return;

    }

    const idFinal = searchParams.get('prod');
    //const atributos = getAttributsUrl();

    const fetch = async () => {
      if (!idFinal) {
        setProduto(null);
        return;
      }
      await getProduto(idFinal).then((prod) => {
        if (prod) {
          setProduto(prod);
          setItensCart([itemCompraNovo(prod)]);
        } else {
          setProduto(null);
          //router.replace('/');

        }

      });
    };

    fetch();


  }, [searchParams, router, user]);

  if ((produto === undefined && itensCart === undefined) || loadFinish) return (
    <Box
      className="py-6 h-full flex flex-col w-full min-h-screen"
      justifyContent="center"
      alignItems="center">
      <Pb />
    </Box>
  );

  if (produto === null && itensCart === null) return (
    <Box className='h-full flex flex-col w-full min-h-screen'>
      <ResponsiveAppBar elevation={12} position="sticky" color="primary" />
      <Container maxWidth="xl">
        <Box
          className="py-6 flex h-full flex-col"
          justifyContent="center"
          alignItems="center">
          <img alt="produto" src='/assets/img/illustrations/produto_2.png' />
          <Typography className='font-extralight font-sans text-gray-500' variant="h2">
            Carrinho vazio
          </Typography>
        </Box>
      </Container>
    </Box>

  );

  return (
    <Box className='h-full flex flex-col min-h-screen'>
      {!produto && <ResponsiveAppBar elevation={12} position="sticky" color="primary" />}
      {produto && <Topo dark title={'GARANTIA DE SEGURANÇA E SATISFAÇÃO'} />}
      <Box className='flex justify-center'>
        <ContainerGrid spacing={0} container maxWidth="xl">
          <Grid item xs={12}>
            <Headline>Finalizar Compra</Headline>
          </Grid>
          <CarrinhoDois
            produto={produto}
            itens={itensCart}
            setItensCart={setItensCart}
            user={user}
          />
          <CheckoutUm
            finishOrder={concluirPedido}
          />
        </ContainerGrid>
      </Box>
      <RodapeCheckout />
    </Box>

  );
};

export default CheckoutScreen;




