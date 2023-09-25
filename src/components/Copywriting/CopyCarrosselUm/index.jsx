"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo, useEffect, useState } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import CarrosselSeis from '../../Carrosseis/CarrosselSeis'
import TextCopy from '../../Texto/TextCopy'


import "../../../Assets/scss/pages/_startup.scss"



const CopyCarrosselUm = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark, hidden} = props;

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if(!domLoaded) {
    return <></>;
  } else {

    if(hidden) {
      return (
        <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container className="items-center">
          <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>

              <Grid sm={9} className="md:text-center md:mb-[28px] sm:mb-[32px] xs:mb-[30px] lg:mb-[36px] pt-6" item>
                <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold`}>
                  <div className={`${true ? ' text-white text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]' : ' text-darkgray '}`}>{props.data.headline}</div>
                </h3>
              </Grid>

          </Grid>
        </Container>
      </section>
      );
    }

    return (
      <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container className="items-center">
          <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>

              <Grid sm={9} className="md:text-center pt-6" item>
                <h4 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} uppercase text-center font-bold`}>
                  <div className={`${true ? ' text-white text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]' : ' text-darkgray '}`}>{props.data.headline}</div>
                </h4>
              </Grid>


              <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center" alignItems={'center'} alignContent={'center'}>
                

                <CarrosselSeis
                  data={props.data.lista}
                  className="mt-[50px]"
                  carouselOption={{
                    slidesPerView: 1,
                    loop: true,
                    navigation: false,
                    autoplay: { delay: 5000, disableOnInteraction: false }
                  }}
                />
              </Grid>

          </Grid>
        </Container>
      </section>
    );
    
  }
};


export default memo(CopyCarrosselUm)