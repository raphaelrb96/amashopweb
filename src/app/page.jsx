'use client'

import { useContext, useEffect, useState } from 'react'
import GridProdutos from '../components/GridProdutos.tsx';
import { getFeedMain, getProdutos } from '../fetchData/getProdutos';
import RootLayout from './layout';
import Home from '../layouts/Home';
import TesteTres from '../layouts/TesteTres';
import { Container, Grid } from '@mui/material';
import LeftSideMenu from '../components/SideMenu/LeftSideMenu/index.tsx';
import Pb from '../components/Pb.jsx';
import CategoriaUm from '../components/Categorias/CategoriaUm';
import ContainerInfoEcom from '../components/Containers/ContainerInfoEcom';
import HeaderTitleEcom from '../components/Texto/HeaderTitleEcom';
import HeroVideoUm from '../components/Hero/HeroVideoUm';
import HeroSlideSwipe from '../components/Hero/HeroSlideSwipe';
import ResponsiveAppBar from '../components/Headers/ResponsiveAppBar';
import RodapeUm from '../components/Rodape/RodapeUm';
import CTA from "../components/Button/CTA";
import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';
import { useUser } from '../context/userContext.js';





const obj = {
  produto: {
    urlVideo: '',
    img: '',
    subhead: 'Resultados Profissionais em Casa',
    btn: 'Iniciar Conversa',
    headline: 'Tenha resultados de salão sem sair de casa, economizando tempo e dinheiro.',
    description: 'Desfrute de cabelos perfeitos de salão sem sair de casa! Com a nossa incrível Escova Alisadora você pode obter resultados profissionais no conforto do seu lar',
    list: [
      {
        icon: "fas fa-check",
        content: "Lisos Deslumbrantes e Duradouros",
      },
      {
        icon: "fas fa-check",
        content: "Cabelos Saudáveis e Radiantes",
      },
      {
        icon: "fas fa-check",
        content: "Praticidade na Rotina",
      },
      {
        icon: "fas fa-check",
        content: "Compatível com Todos Tipos de Cabelo",
      },
      {
        icon: "fas fa-check",
        content: "Cabelos Fortes e Protegidos",
      },
      {
        icon: "fas fa-check",
        content: "Efeito Duradouro que elimina o Frizz",
      },
    ],
  },
  problema: {
    headline: 'O Dilema Diário: Cabelo Indomável, Salão caro e Tempo Escasso',
    description: 'Cabelos frizzados, ondas rebeldes e uma falta de brilho podem rapidamente arruinar o seu visual e a sua confiança. Além disso, métodos tradicionais de alisamento, como ferros quentes, muitas vezes resultam em danos e ressecamento',
    content: [
      {
        img: "assets/video/gif_escova_4.gif",
        title: "Horas Perdidas, Resultados Insatisfatórios",
        subtitle: "Ler Mais",
        icon: "fas fa-triangle-exclamation",
        btnLink: "#compre",
        btnTitle: "RESOLVER AGORA",
        content: "Já perdeu horas preciosas tentando domar seu cabelo com ferros de alisamento que não entregam os resultados prometidos?"
      },
      {
        img: "assets/video/gif_escova_5.gif",
        title: "Danos Capilares Desnecessários",
        subtitle: "Ler Mais",
        icon: "fas fa-triangle-exclamation",
        btnLink: "#compre",
        btnTitle: "RESOLVER AGORA",
        content: "Os métodos tradicionais de alisamento podem deixar seu cabelo danificado, seco e sem vida"
      },
      {
        img: "assets/video/gif_escova_7.gif",
        title: "A Falta de Versatilidade",
        subtitle: "Ler Mais",
        icon: "fas fa-triangle-exclamation",
        btnLink: "#compre",
        btnTitle: "RESOLVER AGORA",
        content: "Você deseja um visual diferente, mas se sente presa a um único estilo devido à falta de opções?"
      }
    ]
  },
  promessa: {
    subTitle: 'Descubra a revolução da beleza capilar',
    title: 'Apresentamos a solução definitiva para um cabelo impecável',
    headline: 'Você vai realizar seu sonho de ter um cabelo perfeitamente liso e radiante todos os dias',
    btn: 'Iniciar Conversa',
    content: [
      {
        id: 1,
        category: ["Web design", "Concept"],
        blogType: "grid",
        tags: ["Development", "Events", "Media", "Mountains"],
        img: "assets/video/gif_escova_1.gif",
        title: "A escova alisadora tem cerdas que alisam mechas maiores por vez, reduzindo o número total de passadas pela metade.",
        content: "Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
        author: 1,
        likes: 28,
        comments: 0,
        date: "Alisa até 2 vezes mais rápido"
      },
      {
        id: 2,
        category: ["CONCEPT", "Web design"],
        blogType: "grid",
        tags: ["Development", "Events", "Media", "Mountains"],
        img: "assets/video/gif_escova_2.gif",
        title: "Alise rente à raiz sem se queimar! A proteção térmica da escova protege o couro cabeludo do calor e evita queimaduras.",
        content: "Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
        author: 2,
        likes: 30,
        comments: 0,
        date: "Proteção térmica anti-queimaduras"
      },
      {
        id: 3,
        category: ["NATURE"],
        blogType: "grid",
        tags: ["Development", "Events", "Media", "Mountains"],
        img: "assets/video/gif_escova_8.gif",
        title: "A escova alisadora alisa fio por fio na primeira passada, e não expõe o seu cabelo ao calor extra de pranchas tradicionais!",
        content: "Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
        author: 3,
        likes: 23,
        comments: 0,
        date: "Reduz os danos e revitaliza os fios"
      },
    ]
  },
  proposta: {
    headline: 'Seja você uma mulher com uma agenda lotada, uma mãe atarefada ou alguém que quer se sentir incrível todos os dias, nossa Escova Alisadora é tudo que você precisa para manter um cabelo incrível sem comprometer sua rotina.',
    lista: [
      {
        img: "/assets/img/escova2.png",
        content: 'Mais profissional, não achata o cabelo como chapinhas tradicionais',
      },
      {
        img: "/assets/img/escova3.png",
        content: "Para todos os momentos, indicado para todos os tipos de cabelo",
      },
      {
        img: "/assets/img/escova4.png",
        content: "Design seguro, permite que você alcance a raíz dos cabelos sem sofrer queimaduras",
      },
      {
        img: "/assets/img/escova5.png",
        content: "Placas de cerâmica, dá mais movimento aos fios pois não achata o cabelo",
      },
      {
        img: "/assets/img/escova6.png",
        title: "Lucrando como Freelancing",
        content: "Personaliza a temperatura ideal, permite escolher entre 5 níveis de temperatura",
      },
      {
        img: "/assets/img/escova7.png",
        title: "Marketing de Afiliação",
        content: "Fácil e rápido de usar, elimina o frizz na primeira passada e permite alisar desde à raiz",
      },

    ],
    subTitle: 'Você já se perguntou',
    title: 'Como algumas pessoas conseguem transformar suas redes sociais em verdadeiras máquinas de vendas, enquanto você ainda luta para monetizar seu conteúdo?',
    headlineExtra: 'Não importa se você é um iniciante ou alguém que já possui certo conhecimento em marketing e vendas, este curso é projetado para todos os níveis de experiência. Você terá acesso aos seguintes E-books:',
    content: [
      {
        title: 'A UNICA VERDADE',
        text: 'É que a maioria das pessoas não sabe como aproveitar o poder das redes sociais para gerar lucro real e ficam apenas consumindo e produzindo conteúdo aleatorio'
      },
      {
        title: 'O SEU PROBLEMA', text: 'É a falta de conhecimento sobre estratégias eficazes para criação de um produto ou serviço e dificuldades para atrair parceiros, afiliados ou patrocinadores'
      },
    ]
  },
  cta: {
    list: [
      {
        icon: "fas fa-check text-purple-900",
        content: "Garantia Total de Satisfação: Sua satisfação é nossa prioridade. Oferecemos uma garantia de troca e reembolso para que você possa comprar com confiança e tranquilidade.",
      },
      {
        icon: "fas fa-check text-purple-600",
        content: "Investimento Inteligente, Benefícios no Envio: Ao comprar agora, você garante frete grátis para todo Brasil, com envio imediato do código de rastreio do correios.",
      },
      {
        icon: "fas fa-check text-purple-600",
        content: "Alisamento Rápido e Entrega Mais Rápida Ainda: Seu cabelo alisado rapidamente e sua Escova Alisadora entregue ainda mais rapida para Manaus. Em menos de 24 horas!",
      },
      {
        icon: "fas fa-check text-purple-600",
        content: "Experimente a Transformação Hoje: Não espere para ver a diferença. Experimente a transformação capilar que milhares de pessoas já amam. Clique no botão abaixo",
      },
    ],
    keys: [
      'Apenas: R$97,90',
      'Frete Grátis',
      'Entrega Rápida',
      'Satisfação Garantida'
    ],
    featurebox: [
      {
        icon: "line-icon-Bakelite text-gray-300 text-[50px]",
        title: "Pagamento Seguro",
        content: "Utilizamos tecnologia de ponta para proteger seus dados financeiros, garantindo uma transação segura e livre de riscos e falhas."
      },
      {
        icon: "line-icon-Medal-2 text-gray-300 text-[50px]",
        title: "Garantia de Satisfação",
        content: "Oferecemos garantia de satisfação, que assegura que em caso de defeito você pode solicitar a troca imediatamente."
      }
    ],
    btn: 'Comprar Agora',
    title: 'Não espere mais para conquistar um cabelo incrivelmente liso e radiante. Peça a sua Escova Alisadora hoje mesmo!',
    headline: 'R$ 97,90',
  },
  duvidas: {
    subTitle: 'Veja nossas perguntas frequentes',
    title: 'PARA TIRAR AS PRINCIPAIS DÚVIDAS E VOCÊ REALIZAR SUA COMPRA COM CONFIANÇA',
    list: [
      {
        title: "A escova é fácil de usar para iniciantes?",
        content: "Absolutamente, nossa escova foi projetada para ser intuitiva e fácil de usar, mesmo para quem nunca usou um dispositivo de alisamento antes."
      },
      {
        title: "Quanto tempo dura o efeito liso?",
        content: "O efeito liso pode durar o dia todo, mas pode variar com base na textura do seu cabelo e nas condições climáticas."
      },
      {
        title: "A escova é adequada para cabelos grossos?",
        content: "Sim, nossa escova funciona bem em todos os tipos de cabelo, incluindo cabelos mais grossos e difíceis de alisar."
      },
      {
        title: "Posso usar no cabelo molhado?",
        content: "Não há a necessidade de lavar o cabelo para conseguir um efeito de escova de salão! A Escova Alisadora deve ser usada somente em cabelos secos."
      },
      {
        title: "É possível obter suporte em caso de dúvidas?",
        content: "Sim, estamos disponíveis para oferecer suporte caso você tenha alguma dúvida ou encontre qualquer problema durante a utilização do produto."
      },

      {
        title: "Como faço para adquirir a minha?",
        content: "Garanta sua Escova Alisadora agora mesmo, clicando no botão abaixo e efetuando o pagamento na proxima página."
      },
    ]
  },
  ctaExtra: {
    btn: 'Comprar Agora',
    btnExtra: 'Mais Informções',
    preco: 'Por Apenas R$97,90',
    headline: 'Sua autoestima merece um upgrade. Compre já e eleve seu estilo e elegancia!',
    text: "Aproveite o Fenômeno de 2023: Um dos Produtos Mais Vendidos no Brasil Está a Um Clique de Distância!",
  }
};


export const metadata = {
  title: 'Escova Alisadora',
}

function ContentDinamic({ produtos, colecoes, categorias, filtrar, selected, navCateg }) {

  if (!produtos) {
    return <Pb />;
  }

  const headlineProdutos = selected.id !== -1 ? selected.name : 'Atualizações, Novidades e Lançamentos';

  return (
    <>

      <Grid item xs={11} lg={10}>
        <CategoriaUm
          navCateg={navCateg}
        />
      </Grid>

      <HeaderTitleEcom
        id={'produtos'}
        subhead='Produtos e Ofertas'
        headline={headlineProdutos}
      />

      <Grid className='order-[0] xs:order-2 sm:order-2' item xs={12} md={3}>
        <LeftSideMenu
          categorias={categorias}
          colecoes={colecoes}
          filtrar={filtrar}
          selected={selected}
        />
        <Grid justifyContent="center" container>
          <Grid item xs={8}>
            <CTA color='inherit' variant='text'>
              Ver mais
            </CTA>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={9}>
        <GridProdutos
          lista={produtos}
        />
      </Grid>

    </>
  );
};

function ContentFix() {
  return (
    <>
      <HeroSlideSwipe />
      <Grid item xs={12}>
        <ContainerInfoEcom />
      </Grid>
    </>
  );
}

export default function App() {

  const routerPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useUser();

  const [state, setState] = useState({
    produtos: null,
    colecoes: null,
    categorias: null,
    pixel: null,
    selected: {
      name: '',
      type: 0,
      id: -1
    }
  });

  const { produtos, colecoes, categorias, selected } = state;

  const getParamsCategoria = () => {
    if (!searchParams.has('categoria')) {

      return undefined;
    }

    const idFinal = searchParams.get('categoria');
    return idFinal;
  };

  const getListCategoria = (cat) => {
    let obj = {
      id: -1,
      name: 'Nenhum Resultado',
      recentes: []
    };
    categorias.map(item => {
      const { id, itens, name, recentes } = item;
      console.log(recentes)
      if (id == cat) {
        obj = item;
        return;
      }
    });
    return obj;
  };

  useEffect(() => {


    const fetch = async () => {
      //const limite = 20;
      // await getProdutos(limite).then((prods) => {
      //   if (prods) {

      //     console.log(prods.length);
      //     setProdutos(prods);
      //   }
      // });

      await getFeedMain().then(result => {
        const produtos = result?.produtosNovos || [];
        const categorias = result?.categorias || [];
        const colecoes = result?.colecoes || [];

        setState((prev) => ({
          ...prev,
          produtos,
          categorias,
          colecoes
        }));
      });
    }

    fetch();


  }, []);

  useEffect(() => {

    const categ = getParamsCategoria();
    if (!categ) return;
    if (!categorias || categorias.length === 0) return;
    const { id, name, recentes } = getListCategoria(categ);
    filtrar(recentes, id, name, 0);

  }, [categorias]);


  const filtrar = (prods, id, name, type) => {
    console.log(type)
    setState((prev) => ({
      ...prev,
      produtos: prods,
      selected: {
        id,
        name,
        type
      }
    }));

    if (type === 0) {
      window?.history.pushState({ categoria: id }, null, '/?categoria=' + id);
    }


    document?.getElementById('produtos').scrollIntoView({
      behavior: 'smooth'
    });

  };

  const navigationCateg = (categ) => {
    const { id, name, recentes } = getListCategoria(categ);
    //router.replace('?categoria=' + categ);
    //window?.history.pushState({categoria: categ}, null, '/?categoria=' + categ);
    //window?.location.replace('/?categoria=' + categ);
    filtrar(recentes, id, name, 0);
  };

  // return (
  //   <RootLayout>
  //     <TesteTres object={obj} />
  //   </RootLayout>
  // );



  return (
    <>
      <Grid justifyContent="center" spacing={1} container>
        <ResponsiveAppBar />
        <ContentFix />
        <ContentDinamic
          categorias={categorias}
          colecoes={colecoes}
          produtos={produtos}
          selected={selected}
          filtrar={filtrar}
          navCateg={navigationCateg}
        />
        <RodapeUm dark />
      </Grid>
    </>
  )
}
