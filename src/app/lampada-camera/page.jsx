'use client'

import { useEffect, useState } from 'react'
import GridProdutos from '../../components/GridProdutos';
import { getProdutos } from '../../fetchData/getProdutos';

import RootLayout from '../layout';
import RootLayout from './../layout';
import TesteTres from '../../layouts/TesteTres';
import Script from 'next/script';
import { registerEvent } from '../../fetchData/registerEvent';
import { Fab, Typography } from '@mui/material';

const obj = {
  produto: {
    urlVideo: '',
    img: '',
    name: 'Lampada Câmera 360°',
    id: 't1eofqhm1o',
    linkCheckout: '',
    linkWhatsapp: '',
    subhead: 'Resultados Profissionais em Casa',
    btn: 'Comprar Agora',
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
    btn: 'Comprar Agora',
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
      'Apenas: R$ 60,00',
      'Frete Justo',
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
    headline: 'R$ 60,00',
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
    preco: 'Por Apenas R$60,00',
    headline: 'Sua autoestima merece um upgrade. Compre já e eleve seu estilo e elegancia!',
    text: "Aproveite o Fenômeno do ano: Um dos Produtos Mais Vendidos no Brasil Está a Um Clique de Distância!",
  }
}


export const metadata = {
  //title: 'Escova Alisadora',
};

export default function EscovaPage() {

  const [produtos, setProdutos] = useState(null);
  const [pixel, setPixel] = useState(undefined);

 

  useEffect(() => {

    return;

    getProdutos().then((prods) => {
      if (prods) {

        console.log(prods.length);
        setProdutos(prods);
      }
    });

  }, []);


  return (
    <RootLayout>


      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RM7L7MGJF9" />

      <Script id="gtag">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-RM7L7MGJF9');
            gtag('config', 'AW-815086144');
            gtag('event', 'conversion', {'send_to': 'AW-815086144/y0ylCI_FydcYEMD01IQD'});

          `}
      </Script>


      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 3567412100159486);
              fbq('init', 625741005706556);

              fbq('track', 'PageView');
              fbq('track', 'ViewContent', { content_ids: ['ls7mi3is96'], content_type: 'product'});

            `,
        }}
      />



      <TesteTres object={obj} />


    </RootLayout>
  );

  return (
    <>
      <main>

        <GridProdutos
          lista={produtos}
          pixel={pixel}
        />

      </main>
    </>
  )
}
