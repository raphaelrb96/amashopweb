
import { fadeIn } from '../../functions/GlobalAnimations.jsx';
import { dataHeroUm, InteractiveBannersData01, objHeadersComItens } from '../../functions/examples.jsx';
import ContainerListaTextoUm from "../../components/Containers/ContainerListaTextoUm/index.jsx";
import ContainerListaTextoDois from '../../components/Containers/ContainerListaTextoDois/index.jsx';
import HeroTres from '../../components/Hero/HeroTres/index.jsx';
import { Fab, Grid, Box, Typography, Button } from '@mui/material';
import DepoimentoUm from '../../components/Depoimentos/DepoimentoUm/index.jsx';
import CopyUm from '../../components/Copywriting/CopyUm/index.jsx';
import CopyCarrosselUm from '../../components/Copywriting/CopyCarrosselUm';

import CopyBannerRotativo from "../../components/Copywriting/CopyBannerRotativo/index.jsx";
import CopyCardImagem from "../../components/Copywriting/CopyCardImagem/index.jsx";
import ContainerModulos from "../../components/Containers/ContainerModulos/index.jsx";
import ContainerBonusExtra from "../../components/Containers/ContainerBonusExtra/index.jsx";
import ContainerChamadaUm from "../../components/Containers/ContainerChamadaUm/index.jsx";
import ContainerQuemSomos from "../../components/Containers/ContainerQuemSomos/index.jsx";
import CopyText from "../../components/Copywriting/CopyText/index.jsx";
import ContainerChamadaDois from "../../components/Containers/ContainerChamadaDois/index.jsx";
import Topo from "../../components/Topo/index.jsx";
import RodapeUm from "../../components/Rodape/RodapeUm";
import { memo, useLayoutEffect } from 'react';
import TextCopy from '../../components/Texto/TextCopy/index.jsx';
import { useRouter } from 'next/navigation';
import { DEBUG } from '../../functions/examples.jsx';
import ContainerPerguntasRespostas from '../../components/Containers/ContainerPerguntasRespostas/index.jsx';




function TesteTres({ object }) {

    const router = useRouter();

    const chamadaDois = object.ctaExtra;

    const clickAddCart = () => {
        if (!DEBUG) {


            window?.gtag('event', 'conversion', {
                'send_to': 'AW-815086144/ZmB2CNL5gOUYEMD01IQD',
                'event_callback': () => {
                    if (typeof (url) != 'undefined') {
                        window.location = url;
                    }
                }
            });



            window?.gtag("event", "add_to_cart", {
                currency: "brl",
                value: 1,
                items: [
                    { item_id: '148541183', item_name: 'Escova Alisadora' }
                ]
            });

            window?.fbq('track', 'AddToCart', {
                content_ids: ['148541183'],
                content_type: 'product'
            });
        }

        window?.location.assign('https://seguro.amashops.com.br/r/QPFD16X4IR');



    };

    const clickPageOferta = () => {
        return;
        if (!DEBUG) { window?.gtag("event", "ir_para_oferta"); }

        //window?.fbq('track', 'AddToCart');
        router.push('/oferta')

    };

    const clickConversa = () => {

        window?.gtag('event', 'conversion', {
            'send_to': 'AW-815086144/DoJQCNjUgeUYEMD01IQD',
            'event_callback': () => {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                }
            }
        });


        window?.gtag("event", "generate_lead", {
            currency: "brl",
            value: 1
        });

        window?.fbq('track', 'Contact');

        window?.open('https://api.whatsapp.com/send?phone=5592981414741&text=Informa%C3%A7%C3%B5es%20sobre%20a%20Escova%20Alisadora');

    }


    return (


        <Box>

            <Grid className='bg-[#011F26] relative' justifyContent="center" alignItems={'center'} container>

                <Topo title={'ENTREGA RÁPIDA PARA MANAUS E REGIÃO NORTE'} />

                <Grid item sm={12}>
                    <HeroTres
                        click={clickAddCart}
                        clickExtra={clickPageOferta}
                        data={object.produto}
                    />
                </Grid>


                <Grid item sm={12} className='hidden'>
                    <CopyBannerRotativo
                        data={object.problema}
                    />
                </Grid>

                <Grid item sm={12}>
                    <CopyCardImagem
                        data={object.promessa}
                        click={clickAddCart}
                    />
                </Grid>


                <Grid item xs={12}>
                    <CopyCarrosselUm
                        data={object.proposta}
                    />
                </Grid>

                <ContainerChamadaUm
                    data={object.cta}
                    click={clickAddCart}
                />

                <ContainerPerguntasRespostas
                    data={object.duvidas}
                />

                <ContainerChamadaDois
                    data={chamadaDois}
                    btn={chamadaDois.btn}
                    headline={chamadaDois.headline}
                    text={chamadaDois.text}
                    preco={chamadaDois.preco}
                    click={clickAddCart}
                />

                <RodapeUm
                    spacingBottom
                />

            </Grid>

            <div onClick={clickConversa} className='fixed shadow-2xl flex flex-row items-center text-center justify-center content-center z-[20000] right-6 bottom-6 py-3 px-6 rounded-[24px] hover:bg-[#25D366] bg-[#075E54]'>
                <i className={`text-[28px] text-white mr-3 fa-brands fa-whatsapp`}></i>
                <Typography className='text-white text-lg'>
                    Iniciar Conversa
                </Typography>

            </div>


        </Box>







    )
};

export default memo(TesteTres);