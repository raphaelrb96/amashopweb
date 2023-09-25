
import {fadeIn} from '../../functions/GlobalAnimations.jsx';
import ContainerListaTextoUm from "../../components/Containers/ContainerListaTextoUm";
import ContainerListaTextoDois from '../../components/Containers/ContainerListaTextoDois';
import HeroTres from '../../components/Hero/HeroTres';
import { Grid } from '@mui/material';
import DepoimentoUm from '../../components/Depoimentos/DepoimentoUm';
import CopyUm from '../../components/Copywriting/CopyUm';
import CopyBannerRotativo from "../../components/Copywriting/CopyBannerRotativo";
import ContainerModulos from "../../components/Containers/ContainerModulos";
import ContainerBonusExtra from "../../components/Containers/ContainerBonusExtra";
import ContainerChamadaUm from "../../components/Containers/ContainerChamadaUm";
import ContainerQuemSomos from "../../components/Containers/ContainerQuemSomos";
import ContainerPerguntasRespostas from "../../components/Containers/ContainerPerguntasRespostas";
import ContainerChamadaDois from "../../components/Containers/ContainerChamadaDois";
import RodapeUm from "../../components/Rodape/RodapeUm";
import { memo } from 'react';



const HeroTresData = {
    btn: 'QUERO APRENDER A LUCRAR',
    btnExtra: undefined,
    subhead: 'Monetize seu tempo online:',
    headline: 'Ganhe muito dinheiro com suas redes sociais',
    description: 'Você está prestes a descobrir uma oportunidade única que pode mudar completamente a forma como você monetiza suas redes sociais.'
};

const dataSoltions = {
    title: 'Temos a solução perfeita pra você que deseja começar',
    destaqueTitle: 'VIVER DAS REDES SOCIAIS',
    description: 'Mesmo que você esteja começando do ABSOLUTO ZERO ou se passa pelos seguintes PROBLEMAS:',
    lista: [
        {
            number: "01",
            title: "FALTA DE CONHECIMENTO E EXPERIÊNCIA",
            description: "NÃO TER CONHECIMENTO PRÉVIO SOBRE MARKETING DIGITAL, VENDAS ONLINE E ESTRATÉGIAS DE AFILIADOS, REVENDA OU CRIAÇÃO DE MARCA."
        },
        {
            number: "02",
            title: "DIFICULDADE NA ESCOLHA DA EXTRATEGIA E PRODUTO",
            description: "NÃO SABER SELECIONAR UM NICHO QUE SEJA RELEVANTE PARA O SEU PÚBLICO-ALVO E QUE TENHA DEMANDA E POTENCIAL DE LUCRO."
        },

        {
            number: "03",
            title: "GERENCIAMENTO DO TEMPO E CONSCISTENCIA",
            description: "MONETIZAR AS REDES SOCIAIS EXIGE CONSISTÊNCIA E GERENCIAMENTO EFICIENTE DO TEMPO. EFICIENCIA E PRODUTIVIDADE SÃO AS CHAVES"
        }

    ],
};

const depoimento = {
    lista: [
        {
            name: 'João Henrique',
            designation: 'Afiliado Iniciante',
            content: '"ANTES DE ADQUIRIR O SOCIAL MONEY, EU NÃO SABIA POR ONDE COMEÇAR PARA GANHAR DINHEIRO COM MINHAS REDES SOCIAIS. AGORA, ESTOU IMPRESSIONADO COM OS RESULTADOS! CONSEGUI CRIAR UMA FONTE DE RENDA CONSISTENTE E ESTOU NO CAMINHO PARA VIVER DO MEU NEGÓCIO ONLINE."',
            img: '/assets/img/perfil2.jpg',
        },
        {
            name: 'Julia Beatriz',
            designation: 'Digital Influencer',
            content: '"EU NUNCA IMAGINEI QUE PUDESSE GANHAR DINHEIRO COM MEUS POST NO INSTAGRAM. MAS GRAÇAS AO SOCIAL MONEY, APRENDI TÉCNICAS DE ENGAJAMENTO E CONSTRUÇÃO DE AUDIÊNCIA QUE TRANSFORMARAM MEU PERFIL EM UMA VERDADEIRA MÁQUINA DE VENDAS."',
            img: '/assets/img/perfil4.jpg'
        },
        {
            name: 'Fernanda Lima',
            designation: 'Empreendedora Digital',
            content: '"EU ESTAVA PERDIDA QUANDO SE TRATAVA DE MONETIZAR MINHAS REDES SOCIAIS, MAS GRAÇAS AO SOCIAL MONEY,APRENDI ESTRATÉGIAS EFICIENTES E CONSEGUI AUMENTAR MINHAS RENDA EM 50% EM APENAS UM MÊS. ESTOU SUPER FELIZ, CONSEGUI COMPRAR MEU PRIMEIRO CARRO ZERO!"',
            img: '/assets/img/perfil1.jpg'
        }
    ],
    subhead: 'Os comentarios que recebemos são',
    title: 'AS PROVAS REAIS DE SATISFAÇÃO'
};

const copywrite = {
    lista: [
        {
            firstname: "O Principal Desafio",
            lastname: "",
            designation: "",
            title: "Baixo engajamento e alcance limitado",
            content: "Você investe tempo e esforço na criação de conteúdo incrível, mas fica frustrado ao ver poucas curtidas, comentários e compartilhamentos. Isso afeta sua motivação e faz você questionar se vale a pena continuar.",
            img: "/assets/video/problem1.gif"
        },
        {
            firstname: "A Maior Barreira",
            lastname: "",
            designation: "",
            title: "Dificuldade em encontrar oportunidades",
            content: "Você sabe que trabalhar com parceiros e programas de afiliados pode impulsionar seus ganhos, mas enfrenta dificuldades em encontrar as oportunidades certas. Isso limita suas chances de aumentar sua renda e seu lucro.",
            img: "/assets/video/problem2.gif"
        },
        {
            firstname: "O Pesadelo Real",
            lastname: "",
            designation: "",
            title: "Sobrecarga de informações e direcionamento",
            content: "Você se sente perdido em meio a tantas informações dispersas sobre monetização nas redes sociais. A falta de um guia claro e direcionamento estratégico faz você desperdiçar tempo e energia em abordagens ineficientes.",
            img: "/assets/video/problem3.gif"
        },
    ],
    subTitle: 'VAMOS REVELAR O GRANDE SEGREDO',
    title: 'Você já se perguntou como algumas pessoas transformam suas redes sociais em verdadeiras máquinas de dinheiro?',
    headline: 'Enquanto você navega nas redes sociais, outras pessoas estão aproveitando essa mesma plataforma para alcançar o sucesso financeiro.',
    headlineExtra: 'NÃO ACHA QUE TA NA HORA DE VOCÊ RESOLVER ISSO DE UMA VEZ POR TODAS ?',
    content: [
        {title: 'A UNICA VERDADE', text: 'É que a maioria das pessoas não sabe como aproveitar o poder das redes sociais para gerar lucro real e ficam apenas consumindo e produzindo conteúdo aleatorio'},
        {title: 'O SEU PROBLEMA', text: 'É a falta de conhecimento sobre estratégias eficazes para criação de um produto ou serviço e dificuldades para atrair parceiros, afiliados ou patrocinadores'},
    ]
};

const beneficios = {
    subTitle: 'CHEGA DE FRUSTRAÇÃO E INCERTEZAS',
    title: 'Descubra como se tornar um verdadeiro especialista em monetização online e alcance ',
    destaqueTitle: 'O sucesso que você sempre sonhou.',
    description: 'Não perca mais tempo e oportunidades. Nosso produto é a chave para transformar sua presença nas redes sociais em um negócio lucrativo. Junte-se a nós agora mesmo e comece a trilhar o caminho para o sucesso na monetização online.',
    content: [
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Estratégias comprovadas",
            content: "Nosso produto oferece um conjunto completo de estratégias comprovadas para vender online através das redes sociais. Aprenda a criar anúncios persuasivos, construir funis de vendas eficientes e utilizar técnicas de conversão que impulsionarão suas vendas e lucros.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Táticas avançadas",
            content: "Descubra táticas avançadas de marketing digital que irão impulsionar sua presença nas redes sociais. Aprenda a segmentar seu público-alvo, criar conteúdo relevante e utilizar estratégias de engajamento que irão aumentar sua visibilidade e sua base de clientes.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Parcerias estratégicas",
            content: "Aproveite o poder das parcerias estratégicas e dos programas de afiliados para expandir seu alcance e aumentar suas vendas. Ensinamos como identificar as melhores oportunidades e como estabelecer relacionamentos com afiliados que promoverão seus produtos.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Construção de autoridade",
            content: "Abordamos a importância de construir autoridade e reputação online para se destacar da concorrência. Aprenda a criar uma presença sólida e engajada nas redes sociais, para ganhar a confiança dos seguidores e se tornar uma referência em seu nicho de mercado.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Marketing de conteúdo",
            content: "Aprenda a criar, manter e monetizar um blog com criação de conteúdo envolvente e relevante que atrai e retém a atenção do seu público. Descubra técnicas para gerar interesse, engajamento e interação com seus seguidores. Conquiste verdadeiros fãs da sua marca e se destaque dos demais.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Automatização e ferramentas",
            content: "Conheça as ferramentas e recursos eficientes para automatizar suas tarefas nas redes sociais, economizando tempo e esforço. Aprenda a utilizar plataformas de agendamento de posts, monitoramento de métricas e gerenciamento de relacionamento com o cliente.",
            linkTitle: "COMEÇAR AGORA",
            link: "#compre"
        },
    ]
}

const conteudo = {
    subTitle: 'O guia completo sobre',
    title: 'Monetização Digital',
    headline: 'Aumente DRASTICAMENTE suas chances de ficar milionário(a) com a internet !!!',

};

const introducao = {
    headline: 'Como você se sentiria se conseguisse transformar sua paixão pelas redes sociais em uma fonte de renda sólida e duradoura?',
    content: [
        {
            img: "assets/video/comemorar.gif",
            title: "Chegou a sua vez!",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#compre",
            btnTitle: "COMEÇAR AGORA",
            content: "Aprenda como aproveitar todas as oportunidades que as redes sociais oferecem. Atraves do nosso guia completo."
        },
        {
            img: "assets/video/oportunidade_unica.gif",
            title: "Oportunidade Unica",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#compre",
            btnTitle: "COMEÇAR AGORA",
            content: "Descubra como atrair clientes, precificar seus serviços e construir uma reputação impecável no mercado digital."
        },
        {
            img: "assets/video/perder_tempo.gif",
            title: "Não perca mais tempo!",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#compre",
            btnTitle: "COMEÇAR AGORA",
            content: "Dê o primeiro passo rumo à sua independência financeira. Comece agora e transforme seus sonhos em realidade."
        }
    ]
}

const moduls = {
    title: 'CONHECIMENTO DE ALTO VALOR AGREDADO',
    subTitle: 'Nossa proposta é te entregar',
    description: 'Para que você avance na sua carreira e alcance sues resultados e metas.',
    content: [
        {
          img: "/assets/img/vencedora.jpg",
          title: 'Mentalidade Vencedora',
          subtitle: 'Módulo 01',
          content: 'Aprenda a adotar uma nova mentalidade para atrair mais sucesso em todas as areas da sua vida. Lidar com as coisas que você quer fazer e as que você tem a obrigação de fazer de forma saudável, pragmática e adulta.',
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
        {
          img: "/assets/img/profissal_digital.jpg",
          title: "Nova Profissão do Digital",
          subtitle: "Módulo 02",
          content: "Explore a nova profissão digital. Num mundo onde a redução corporativa é hoje comum, e muitos acham que a salvação está em criar seu escritorio dentro de casa ou até mesmo criar um negocio digital com baixo investimento.",
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
        {
          img: "/assets/img/iniciativas.jpg",
          title: "As Melhores Iniciativas",
          subtitle: "Módulo 03",
          content: "Conheça as melhores 23 formas para iniciar sua jornada como um Empreendor Digital de Sucesso. Atraves das vendas fisicas, onlines, produção ou ate mesmo fabricação. De baixo e alto investimento.",
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
        {
          img: "/assets/img/venda.jpg",
          title: "Venda Qualquer Coisa Online",
          subtitle: "Módulo 04",
          content: "Dicas e extrategias para usar as redes sociais para vender qualquer produto. De qualquer valor. Pra o maximo de pessoas possiveis. De forma gratuita e de forma profissional com marketing digital.",
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
        {
          img: "/assets/img/freelancer.jpg",
          title: "Lucrando como Freelancing",
          subtitle: "Módulo 05",
          content: "Metodologia validada pra monetizar seu tempo como Freelancing. Começando do zero mesmo sem nenhuma experiencia sobre qualquer assunto.",
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
        {
          img: "/assets/img/marketing.jpg",
          title: "Marketing de Afiliação",
          subtitle: "Módulo 06",
          content: "Conceitos sobre a maior porta de entrada para o sucesso no mundo digital: O Marketing de Afiliação. Onde você pode iniciar imediatamente sem possuir produto e extrutura",
          buttonTitle: "Ver Próximo",
          buttonLink: "#compre"
        },
    ],
};

const bonus = {
    title: 'PARA INTENSIFICAR E ACELERAR SUA EVOLUÇÃO',
    subTitle: 'Bônus exclusivos',
    description: 'Para que você avance na sua carreira e alcance sues resultados e metas.',
    content: [
        {
            title: "BÔNUS 1",
            content: "Regras para se Tornar um Vencedor em Qualquer Área da Sua Vida",
        },
        {
            title: "BÔNUS 2",
            content: "Estruture seu Instagram de Forma Profissional para Negócios",
        },
        {
            title: "BÔNUS 3",
            content: "Como Escolher Bons Produtos para Divulgar e Começar a Lucrar Hoje",
        },
        {
            title: "BÔNUS 4",
            content: "Acesso vitalicio e liberação pra revenda como afiliado",
        },
    ]
};

const cta = {
    list: [
        {
            icon: "fas fa-check text-purple-900",
            content: "Adquira conhecimento especializado para se destacar e construir uma reputação sólida como influenciador ou empreendedor digital",
        },
        {
            icon: "fas fa-check text-purple-600",
            content: "Desenvolva a capacidade de transformar suas paixões e habilidades em uma fonte de renda consistente, ganhando dinheiro online",
        },
        {
            icon: "fas fa-check text-purple-600",
            content: "Descubra os segredos dos empreendedores digitais de sucesso e aprenda a construir um negócio lucrativo nas redes sociais, do zero.",
        },
        {
            icon: "fas fa-check text-purple-600",
            content: "Liberte-se das limitações financeiras e viva como um nômade, aproveitando as oportunidades de negócios oferecidas pelas redes sociais.",
        },
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
            content: "Oferecemos garantia de satisfação, que assegura que você pode experimentar nosso treinamento sem preocupações e dúvidas."
        }
    ],

};

const quemSomos = {
    img: "/assets/img/comendador.png",
    content: [
        {
          number: {
            text: "20",
          },
          title: "MAIS DE VINTE MILHÕES FATURADOS ONLINE",
        },
        {
          number: {
            text: "12",
          },
          title: "MAIS DE DOZE MIL CLIENTES E ALUNOS",
        },
        {
          number: {
            text: "300",
          },
          title: "MAIS DE TREZENTOS AFILIADOS E VENDEDORES",
        }
    ]
};

const duvidas = {
    subTitle: 'Veja nossas perguntas frequentes',
    title: 'PRA VOCÊ ENTRAR EM AÇÃO COM DECISÃO E CONFIANÇA',
    list: [
        {
            title: "Como é, e qual é o formato do treinamento?",
            content: " Nosso treinamento é oferecido em formato de ebook, permitindo que você acesse o conteúdo a qualquer hora e em qualquer lugar, no seu ritmo e conveniência."
        },
        {
            title: "Quais são os formatos dos ebooks disponíveis?",
            content: "Estão disponíveis em formato PDF, que pode ser facilmente lido em diversos dispositivos, como computadores, tablets e smartphones."
        },
        {
            title: "Quais vantagens em comprar o nosso treinamento?",
            content: "Você terá acesso imediato aos 6 ebooks e 3 bônus, sem a necessidade de esperar por envio físico ou disponibilidade de vagas em cursos presenciais."
        },
        {
            title: "É possível obter suporte em caso de dúvidas?",
            content: "Sim, estamos disponíveis para oferecer suporte caso você tenha alguma dúvida ou encontre qualquer problema durante a utilização dos ebooks."
        },
        {
            title: "Existe alguma garantia de qualidade dos ebooks?",
            content: "Sim, garantimos a qualidade dos nossos ebooks. Eles são cuidadosamente elaborados por especialistas e contêm conteúdo relevante e atualizado para ajudar você a atingir seus objetivos."
        },
        {
            title: "Como faço para adquirir os ebooks?",
            content: "Para adquirir os ebooks, basta clicar no botão de compra e seguir as instruções fornecidas. Você será redirecionado para a página de pagamento seguro, onde poderá realizar a compra de forma fácil e rápida."
        },
    ]
};


function Home () {
    return (
        <Grid className='bg-darkpurple2' justifyContent="center" alignItems={'center'} container>
            
            <Grid item sm={12}>
                <HeroTres 
                    data={HeroTresData} 
                />
            </Grid>
            <Grid item sm={12}>
                <CopyBannerRotativo
                    data={introducao}
                />
            </Grid>

            <Grid item xs={12}>
                <CopyUm
                    data={copywrite}
                />
            </Grid>

            <Grid item sm={12}>
                <ContainerListaTextoUm
                    className="my-14"
                    grid="justify-center gap-y-10"
                    theme="text-box-style-02"
                    data={dataSoltions}
                    xs={10}sm={8} md={4} lg={4} xl={4}
                    dark
                    animation={fadeIn} 
                />
            </Grid>
            
            <ContainerModulos 
                data={moduls}
            />
            
            <ContainerBonusExtra
                data={bonus}
            />

            <ContainerChamadaUm
                data={cta}
            />

            <Grid item sm={12} lg={10}>
                <ContainerListaTextoDois
                    grid=" py-[120px] "
                    dark
                    theme="icon-with-text-06"
                    className="hover:text-purple-950 text-purple-400"
                    data={beneficios}
                    xs={12}sm={8} md={6} lg={4} xl={4}
                    animation={fadeIn}
                    animationDelay={0.1}
                />
            </Grid>

            <Grid className='bg-lightgray' item xs={12} sm={12} md={12}>
                <DepoimentoUm
                    grid="gap-y-[10px] bg-lightgray justify-center"
                    theme='testimonials-style-03 px-[10px] py-[26px]'
                    className="sm:px-0"
                    data={depoimento}
                    animation={fadeIn}
                    animationDelay={0.3}
                />
            </Grid>

            <ContainerQuemSomos
                data={quemSomos}
            />

            <ContainerPerguntasRespostas
                data={duvidas}
            />

            <ContainerChamadaDois

            />

            <RodapeUm 
            
            />

        </Grid>
        
    )
};

export default memo(Home);