"use client"

import { Grid, Link, Container, Typography } from "@mui/material";
import "../../../Assets/scss/components/_iconwithtext.scss";
import { memo, useCallback } from "react";
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import { fadeIn } from '../../../functions/GlobalAnimations';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import "../../../Assets/scss/components/_textbox.scss";
import ListaIconeTexto from "../../Listas/ListaIconeTexto";
import PassoAPassoUm from "../../Listas/ListaEtapas/PassoAPassoUm";
import ListaSimples from "../../Listas/ListaSimples";
import { TextoAnimado } from "../../Texto/TextoAnimado";

import VideoPlayer from "../../VideoPlayer";


const ContainerChamadaUm = (props) => {
  const { xs, sm, md, lg, xl } = props;
  const { dark, click, clickExtra } = props;
  const { btn, btnExtra, title, keys } = props.data;


  //const urlVideo = 'https://www.shutterstock.com/shutterstock/videos/1074669659/preview/stock-footage-super-slow-motion-of-beautiful-healthy-long-smooth-flowing-brown-hair.webm';
  const urlVideo = '/assets/img/backgrounds/background-abstract.mp4';
  const back = '/assets/img/backgrounds/trianglify.png';


  return (
    <section id="compre" className=" bg-lightgray w-full">
      <VideoPlayer
        className="py-[80px] h-full flex flex-1 lg:py-[80px] md:py-[65px] sm:py-[50px] bg-slate-950 xs:py-[40px]"
        src={urlVideo}
        loop={true}
        poster={back}
        overlay={["#003840", "#005A5B", "#007369", "#008C72", "#02A676"]}
        opacity="0.9"
      >
        <Container>
          <Grid container className="z-[1] relative md:justify-center lg:justify-between xl:justify-between">
            
            <Grid lg={7} md={7} className="font-serif md:mb-20 lg:pr-10 md:pr-0 sm:mb-14 xs:mb-14 mt-[85px] md:mt-[65px] xs:mt-[75px]" item>
              
              <h2 className="heading-4 font-serif font-medium mx-0 text-gray-100 mb-10 mt-6">

                {title}

              </h2>

              <h3 className="heading-4 block font-serif font-medium mx-0 text-gray-100 mt-10 mb-4">

                <TextoAnimado duration={3000} className="font-semibold mb-6 mt-2" color="#DAFDBA" animation="slide" data={keys}>

                </TextoAnimado>

              </h3>


              <ListaSimples theme="text-gray-100" className="mx-0 text-md mt-12 list-style-02 w-[95%]" data={props.data.list} />


            </Grid>

            <Grid lg={5} md={5} sm={10} xs={12} className="xs:pl-0 sm:pl-0 pl-12 landscape:px-[15px]" item>

              <div className="xs:text-center mt-[20px] md:mt-[25px] xs:mt-[35px] px-0 xs:justify-center sm:justify-center">
                <Buttons ariaLabel="link for pricing-packages" href={!click ? "#compre" : null} onClick={click ? click : null} icon="fa-solid fa-money-bill-wave" className="mr-[0px] xs:mx-0 xs:w-full sm:mx-[14px] font-serif hover:text-gray-100 uppercase mb-[25px]" themeColor={["#008C72", "#02A676"]} size="xl" color="#fff" title={btn} />
                {btnExtra ? <Buttons ariaLabel="link for modal button" onClick={clickExtra ? clickExtra : null} className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#ffffff" size="xl" title={btnExtra} /> : null}

                <span className="flex items-center justify-center sm:mb-[4px] mb-[6px]">
                  <CreditScoreIcon className={`text-[18px] text-white mr-3`} />
                  <Typography className="text-[12px] font-medium text-white text-center" variant="p">
                    PAGAMENTO ONLINE SEGURO
                  </Typography>

                </span>
                <span className="flex items-center justify-center sm:mb-[6px] mb-[16px]">
                  <GppGoodIcon className={`text-[18px] text-white mr-3`} />
                  <Typography className="text-[12px] font-medium text-white text-center" variant="p">
                    GARANTIA DE 90 DIAS
                  </Typography>

                </span>
              </div>

              <span className="flex items-center justify-center mt-16 mb-10">
                <p className="w-[90%] xs:w-full xs:text-center sm:w-full text-center xs:px-4 sm:px-4 mb-[40px] md:mb-[45px] italic text-gray-300 xs:mb-[25px]">
                  Satisfação garantida ou seu dinheiro de volta. Experimente nosso produto e se não estiver totalmente satisfeito, devolvemos cada centavo.
                </p>
              </span>

              <ListaIconeTexto
                xs={12}
                xm={12}
                md={12}
                lg={12}
                xl={12}
                className="xs:hidden sm:hidden"
                grid="justify-center"
                theme="icon-with-text-01 mt-8 text-gray-300"
                data={props.data.featurebox} />

              <h6 className="heading-6 xs:hidden sm:hidden font-serif mt-20 font-medium mb-0 text-gray-100 lg:mb-[9px] md:mb-[8px] sm:mb-44px">

              </h6>

            </Grid>

            <Grid lg={5} md={5} className="content xs:pl-0 sm:pl-0 pl-12 landscape:px-[15px]" item>

            </Grid>
          </Grid>
        </Container>

      </VideoPlayer>

    </section>
  )
};


export default memo(ContainerChamadaUm);