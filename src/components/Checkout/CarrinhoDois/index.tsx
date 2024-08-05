import React from 'react';
import { Col, Collapse, Container, Navbar, Row } from 'react-bootstrap'
import Buttons from '../../Button/Buttons';
import Link from 'next/link';
import { Button, Grid, styled } from '@mui/material';
import { ProdutoType } from '../../../types/ProdutoType';
import { ItemCart } from '../../../types/ItemCart';
import { cleanCart, deleteItemCart, updateItemCart } from '../../../fetchData/cartServices';
import { User } from 'firebase/auth';

const cartData = [
  {
    img: "https://via.placeholder.com/600x765",
    productName: "Burberry London",
    size: "L",
    price: "$350.00",
    link: "#",
  },
];

const CheckoutContainer = styled(Grid)`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #ffffff;
  border-color: #008c7225;
  border-width: 2px;
  border-radius: 16px;
  order: 3;
  ${props => props.theme.breakpoints.up("md")} {
    order: 1;
  }
`;

const ThumbContainer = styled("td")`
  width: 110px;
  color: #828282;
  vertical-align: middle;
  border-bottom: 1px solid #e4e4e4;
  border-top: 0;
  padding: 25px 10px;
  line-height: 28px;
  ${props => props.theme.breakpoints.down("lg")} {
    position: absolute;
    left: 0;
    width: 80px;
    display: inline-block;
    top: 0;
    overflow: hidden;
    text-align: left;
    border: none;
    margin-bottom: 10px;
    padding: 0;
    &::before {
      content: attr(data-title);
      font-weight: 500;
      float: left;
      display: block;
      color: #232323;
      font-family: Poppins, sans-serif;
      font-size: 12px;
    }
  }
  ${props => props.theme.breakpoints.down("sm")} {
    position: relative;
  }
`;

interface PropsCarrinhoContent {
  produto: ProdutoType | undefined | null;
  itens: ItemCart[] | undefined | null;
  setItensCart: React.Dispatch<any>;
  user: User | any;
};

const CarrinhoDois = ({ produto, itens, setItensCart, user }: PropsCarrinhoContent) => {

  const list = itens;

  if (!list) {
    return null;
  }

  const limparCarrinho = () => {
    if (produto) return;
    console.log(itens)
    if (itens && itens.length > 0) {
      console.log('itens set null')
      setItensCart(null);
      cleanCart(user.uid, itens, (sucess) => { });
    }
  };

  const removerItemCarrinho = (idItem: string, position: number) => {
    if (produto) return;
    const newItens = itens;
    newItens?.slice(position, 1);
    setItensCart(newItens);
    deleteItemCart(user.uid, idItem, (sucess) => { })
  };

  const atualizarQuantidade = (idItem: string, position: number, novaQuantidade: number) => {
    if (novaQuantidade < 1) return;
    if (produto) {
      const item = itens[0];
      const newObjIte = {
        ...item,
        quantidade: novaQuantidade
      };
      setItensCart([newObjIte]);
      return;
    }
    updateItemCart(novaQuantidade, user.uid, idItem, () => { });
  };


  return (
    <CheckoutContainer item xs={12} sm={8} md={6} lg={7} className="px-[70px] pt-[50px]  lg:px-[40px] md:px-[25px]">
      <Row className='flex justify-center content-center items-end'>
        <Col xs={12} className="mb-[26px] md:mb-0">
          <table className="cart-products  mb-[60px] md:mb-[40px] xs:!mb-0">
            <thead>
              <tr className="font-serif text-[#212529] text-start">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Produto</th>
                <th scope="col">Preço</th>
                <th scope="col">Quantid.</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                itens.map((item, i) => {
                  return (
                    <tr key={i} className="product pt-0 md:pt-6">
                      <td className="product-remove">
                        {!produto && <span rel="noreferrer" onClick={() => removerItemCarrinho(item.idItem, i)} className="btn-default uppercase font-medium text-lg cursor-pointer hover:text-basecolor">×</span>}
                      </td>
                      <ThumbContainer >
                        <Link aria-label="product" href={'#'}>
                          <img className="cart-product-image w-[180px] mt-6" width="" height="95.63" src={item?.fotoPrincipal} alt="product" />
                        </Link>
                      </ThumbContainer>
                      <td className="product-name">
                        <a aria-label="shopping" className='font-semibold' href="#">{item?.nome}</a>
                        <span className="variation"> Modelo: único</span>
                      </td>
                      <td className="product-price text-xs" data-title="Preço">{Number(item?.valor).toFixed(2)}</td>
                      <td className="product-quantity text-xs" data-title="Quantidade">
                        <div className="quantity text-xs">
                          <label className="screen-reader-text">Quantid.</label>
                          <input type="button" onClick={() => atualizarQuantidade(item.idItem, i, item.quantidade - 1)} defaultValue="-" className="qty-minus qty-btn" />
                          <input className="input-text qty-text" type="number" name="quantity" value={item.quantidade} />
                          <input type="button" onClick={() => atualizarQuantidade(item.idItem, i, item.quantidade + 1)} defaultValue="+" className="qty-plus qty-btn" />
                        </div>
                      </td>
                      <td className="product-subtotal text-xs" data-title="Total">{Number(item?.valor * item?.quantidade).toFixed(2)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Col>
        <Col md={!produto ? 8 : 12} className="md:mb-[20px] flex justify-start sm:justify-center">
          <div className="coupon-code-panel flex items-center">
            <input type="text" placeholder="Código promocional" className="relative" />
            <i className="feather-scissors absolute left-5"></i>
            <a aria-label="shopping" onClick={() => { }} className="btn apply-coupon-btn text-uppercase border-hidden">Aplicar</a>
          </div>
        </Col>
        {
          !produto &&
          <Col md={4} className="flex md:mb-[20px] justify-end sm:justify-center">
            <Button onClick={limparCarrinho} variant='outlined' size='small' color='info' className="btn-fancy font-medium font-serif uppercase border-[2px] rounded-none  pt-11 mr-[24px]">
              Limpar Carrinho
            </Button>
          </Col>
        }
      </Row>
    </CheckoutContainer>
  );
};

export default CarrinhoDois;
