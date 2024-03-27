"use client"

import { Container, Grid, Link, Typography } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import BannerRotativo from '../../InterativeBanners/BannerRotativo'
import Overlap from '../../Overlap'

import "../../../Assets/scss/pages/_startup.scss"
import { rotateInLeft } from "../../../functions/GlobalAnimations"
import TextCopy from "../../Texto/TextCopy"
import ListaItemClean from "../../Listas/ListaItemClean"



const CopyCardImagem = (props) => {
  const { xs, sm, md, lg, xl } = props;
  const { dark, click } = props;
  const { btn } = props.data;
  return (
    <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[60px] bg-lightgray">
      <Container className="items-center">
        <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
          <Grid sm={12} item>
            <TextCopy data={props.data} />
          </Grid>

          <Grid item xs={12} sm={8} md={12} lg={12} className="justify-center mb-6" justifyContent="center" alignItems={'center'} alignContent={'center'}>
            <ListaItemClean
              overlay={["#f3c7f2", "#445a58"]}
              data={props.data.content.slice(0, 3)}
            />
          </Grid>

          <Grid item xs={12} md={8} lg={6}>
            <div className="xs:text-center mt-20">
              <Buttons ariaLabel="link for pricing-packages" onClick={click ? click : null} icon="fa-solid fa-money-bill-wave" className="mr-[0px] xs:mx-0 xs:w-full sm:mx-[5px] font-serif hover:text-gray-100 uppercase mb-[25px]" themeColor={["#008C72", "#02A676"]} size="xl" color="#fff" title={btn} />
              <span className="flex items-center justify-center sm:mb-[4px] mb-[6px]">
                <CreditScoreIcon className={`text-[18px] text-[#02A676] mr-3`} />
                <Typography className="text-[12px] font-medium text-[#02A676] text-center" variant="p">
                  PAGAMENTO ONLINE SEGURO
                </Typography>

              </span>
              <span className="flex items-center justify-center sm:mb-[6px] mb-[16px]">
                <GppGoodIcon className={`text-[18px] text-[#02A676] mr-3`} />
                <Typography className="text-[12px] font-medium text-[#02A676] text-center" variant="p">
                  GARANTIA DE 90 DIAS
                </Typography>

              </span>
            </div>
          </Grid>

        </Grid>
      </Container>
    </section>
  )
};


export default memo(CopyCardImagem);