"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import BannerRotativo from '../../InterativeBanners/BannerRotativo'
import Overlap from '../../Overlap'

import "../../../Assets/scss/pages/_startup.scss"
import { rotateInLeft } from "../../../functions/GlobalAnimations"



const CopyBannerRotativo = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <Container className="items-center">
        <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
            <Grid sm={8} lg={8} className="md:text-center pt-6" item>
              <h4 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center uppercase mb-[45px] font-bold`}>
                <div className={`${true ? ' text-white text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]' : ' text-darkgray '}`}>{props.data.headline}</div>
              </h4>
              <p className="w-full text-lg text-center mb-[35px] text-[#f1edf2] leading-[30px] xs:text-xmd">
                {props.data.description}
              </p>
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12} className="justify-center" justifyContent="center" alignItems={'center'} alignContent={'center'}>
                <BannerRotativo 
                  animation={rotateInLeft} 
                  animationDelay={0.4} 
                  grid="gap-y-1 mt-[40px] justify-center" 
                  data={props.data.content} />
            </Grid>
        </Grid>
      </Container>
    </section>
  )
};


export default memo(CopyBannerRotativo)