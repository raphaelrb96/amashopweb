"use client"

import { Grid, Link ,Container} from "@mui/material"
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
import ListaExpansivel from "../../Listas/ListaExpansivel"



const ContainerPerguntasRespostas = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="w-full py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray sm:pb-22">
      <Container>
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center xs:mb-16">
          <Grid lg={6} sm={8} className="text-center font-serif mb-[60px] md:mb-[55px] sm:mb-16 xs:mb-0" item>
            <span className="font-semibold uppercase text-gradient bg-[#02A676] block tracking-[1px] mb-[20px] sm:mb-[10px]">
                {props.data.subTitle}
            </span>
            <h2 className="heading-5 mx-auto font-semibold text-gray-800 w-[90%] xs:w-full">
              {props.data.title}
            </h2>
          </Grid>
          <Grid item sm={12} md={8} lg={8}>
            <ListaExpansivel 
                theme="accordion-style-02"
                className="mt-14"
                animation={fadeIn}
                themeColor="light"
                data={props.data.list}
            />          
          </Grid>
        </Grid>
        
      </Container>
    </section>
  )
};


export default memo(ContainerPerguntasRespostas);