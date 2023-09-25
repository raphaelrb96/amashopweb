"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


import "../../../Assets/scss/components/_textbox.scss"
import ListaIconeTexto from "../../Listas/ListaIconeTexto"


const ContainerListaTextoDois = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <Container>
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="mb-[0%]">
          <Grid xs={12} sm={10} md={8} lg={10} item>
            <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold mb-[10px] lg:mb-[15px]`}>{props.data.title} 
              <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-darkgray '}`}>{props.data.destaqueTitle}</div>
            </h3>
            <h6 className={`font-serif ${dark ? ' text-gray-400 ' : ' text-darkgray '} text-center mb-[5px] lg:mb-[5px]`}>
              {props.data.description}
            </h6>
          </Grid>
        </Grid>
        <ListaIconeTexto
            grid=" py-[40px] "
            theme="icon-with-text-06"
            className="hover:text-purple-950 text-gray-200"
            data={props.data.content}
            xs={xs} sm={sm} md={md} lg={lg} xl={xl}
            animation={fadeIn}
            animationDelay={0.1}
        />
      </Container>
    </section>
  )
};


export default memo(ContainerListaTextoDois)