"use client"

import { Grid, Link, Container } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


import "../../../Assets/scss/components/_textbox.scss"
import ListaIconeTexto from "../../Listas/ListaIconeTexto"
import PassoAPassoUm from "../../Listas/ListaEtapas/PassoAPassoUm"
import Contagem from "../../Contagem"


const ContainerQuemSomos = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="overflow-hidden py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <Container>
        <Grid container className="sm:mb-0" justifyContent='center' alignContent='center' alignItems="flex-start">
          
          <Grid lg={5} md={8} xs={12} sm={10} item className="xs:mb-10 items-center xs:text-center sm:text-center md:text-center lg:text-left " >
            <h2 className="heading-4 font-serif lg:w-[90%] xs:w-full sm:w-full md:w-full font-semibold text-gray-200 mb-[30px] sm:mb-[20px]">
                QUEM SOU EU, E PORQUÊ VOCÊ PRECISA ME OUVIR
            </h2>
            <p className="lg:w-[80%] xl:w-[80%] xs:w-full sm:w-full md:w-full xs:mb-20 sm:mb-20 md:mb-20">
                Um renomado especialista em vendas online e monetização de redes sociais. Com uma vasta experiência no mundo do marketing digital, adquiri conhecimentos valiosos ao longo dos anos, que agora compartilho com entusiasmo com empreendedores e aspirantes a empreendedores como você.
                Meu objetivo é capacitar indivíduos como você a alcançarem o sucesso financeiro e a liberdade através das oportunidades oferecidas pelas redes sociais.
            </p>
            <blockquote className="w-[80%] xs:hidden sm:hidden md:hidden lg:flex lg:w-[80%] border-l-[5px] border-purple-700 text-gray-400 font-medium text-xmd pl-[30px] md:w-full pr-0 leading-[26px] mb-0 mt-[40px] xs:pl-[20px]">
                
                <span className="font-serif font-medium text-start text-md to-gray-400 uppercase block mt-[20px]">
                    COMENDADOR DIGITAL
                </span>
            </blockquote>
          </Grid>

          <Grid lg={4} md={5} xs={12} sm={8} item className="xs:mb-20 sm:mb-16 h-[480px]">
            <img src={props.data.img} alt="" className="rounded-[6px] object-cover h-full" />
          </Grid>
          
          <Grid lg={2} md={2} xs={6} sm={5} item className="  xs:ml-[0px] sm:ml-[0px] ml-[20px]">
            <Contagem 
              theme="counter-style-03" 
              grid="pl-[30px] xs:pl-[0px] sm:pl-[0px]" 
              as="h3" 
              className="heading-4 text-gray-300 sm:justify-center font-serif text-left w-[100%] xs:text-center sm:text-center" 
              data={props.data.content} 
              duration={2} 
              postfix_sign="+"
            />
          </Grid>

        </Grid>
      </Container>
    </section>
  )
};


export default memo(ContainerQuemSomos);