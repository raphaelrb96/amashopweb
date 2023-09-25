"use client"

import { Grid, Link, Container } from "@mui/material";
import "../../../Assets/scss/components/_iconwithtext.scss";
import { memo } from "react";
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


import "../../../Assets/scss/components/_textbox.scss";
import ListaIconeTexto from "../../Listas/ListaIconeTexto";
import PassoAPassoUm from "../../Listas/ListaEtapas/PassoAPassoUm";
import ListaSimples from "../../Listas/ListaSimples";
import {TextoAnimado} from "../../Texto/TextoAnimado";
import RodapeUm from "../../Rodape/RodapeUm";

const ContainerChamadaDois = (props) => {

  const {xs, sm, md, lg, xl} = props;
  const {dark, btnExtra, btn, headline, text, click, clickExtra, preco} = props;

  const clickAddCart = () => {
    window?.gtag("event", "add_to_cart", {
      currency: "brl",
      value: 0,
      items: [
        {item_id: 'social-money', item_name: 'Social Money'}
      ]
    });

    //window?.fbq('track', 'AddToCart');
    window?.open('https://pay.kiwify.com.br/FUeA5Pp');
  };


  return (
      <div id="compre" className="bg-gradient-to-r from-[#003840] via-[#005A5B] to-[#007369] w-full py-[80px] lg:py-[80px] md:py-[65px] sm:py-[50px] xs:py-[40px]">

          <Grid container alignItems={"center"} justifyContent={"center"} alignContent={"center"} className="px-[26px] md:justify-center lg:justify-between xl:justify-between">

            <Grid lg={7} md={8} className="font-serif md:mb-6 sm:mb-4 xs:mb-4" item>
              <h2 className="heading-4 font-serif font-medium text-gray-100 mb-6 w-[100%] lg:w-[90%] md:mb-4 xs:mb-6">
                {headline}
              </h2>

              <h1 className="heading-2 font-serif font-bold text-[#ffffff] mb-6 w-[100%] lg:w-[90%] md:mb-4 xs:mb-6">
                {preco}
              </h1>
              
            </Grid>

            <Grid lg={4} md={4} className="items-center text-center landscape:px-[2px]" item>
                
                <div className="xs:text-center mb-[30px] mt-[80px] md:mt-[45px] xs:mt-[55px] px-0 xs:justify-center sm:justify-center landscape:md:mt-[60px]">
                    <Buttons ariaLabel="link for pricing-packages" href={!click ? "#compre" : null} onClick={click ? click : null} icon="fa-solid fa-money-bill-wave" className="mr-[0px] xs:mx-0 xs:w-full sm:mx-[14px] font-serif hover:text-gray-100 uppercase xs:mb-[25px] sm:mb-[25px] md:mb-[15px]" themeColor={["#008C72", "#02A676"]} size="xl" color="#fff" title={btn} />
                    {btnExtra ? <Buttons ariaLabel="link for modal button" onClick={clickExtra ? clickExtra : null} className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#ffffff" size="xl" title={btnExtra} /> : null}
                </div>
                <p className="w-[100%] mb-[16px] md:mb-[20px] italic text-gray-300 xs:mb-[15px]">
                  {text}
                </p>
            </Grid>

          </Grid>

          

      </div>
  )
};


export default memo(ContainerChamadaDois);