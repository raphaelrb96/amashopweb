"use client"

import { Grid, Link, Container, GridProps } from "@mui/material";
import { memo } from "react";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import { fadeIn } from '../../../functions/GlobalAnimations';

interface FooterProps {
  dark?: boolean;
  spacingBottom?: boolean;
  className?: string | undefined | React.ComponentProps<'div'>['className'];
}

const RodapeUm = (props: FooterProps) => {

  const { dark, spacingBottom, className } = props;

  const backDark = dark ? "bg-[#011F26]" : "";
  const spacing = spacingBottom ? "pb-[86px]" : "";
  const classes = className ? className : '';

  return (
    <footer className={`py-[30px] px-[30px] relative mt-auto bottom-0 order-last w-full ${backDark} ${spacing} ${classes}`}>

      <Grid container alignItems={"center"} justifyContent={"center"} alignContent={"center"} className="items-center">

        <Grid lg={5} md={5} sm={12} xs={12} className="sm:mb-[15px] md:order-2" item>
          <ul className="flex xs:flex-col sm:text-center sm:justify-center gap-x-[35px] md:gap-x-[20px] gap-y-[7px]">
            <li><a aria-label="link for" href="#" className="hover:text-gray-50 text-gray-200">Compre com confiança e segurança. </a></li>
          </ul>
        </Grid>

        <Grid lg={2} md={2} sm={12} xs={12} className="md:order-2 xs:order-1 text-center md:mb-[20px] flex justify-center flex-col items-center" item>
          <div className="">
            <img src="/assets/img/logomarca_ama.png" alt="" height="" width="" className="w-[150px] object-contain" />
          </div>
        </Grid>

        <Grid lg={5} md={5} sm={12} xs={12} className="md:order-2 text-right sm:text-center" item>
          <p className="underline underline-offset-4 hover:text-gray-50 text-gray-200 font-medium">© {new Date().getFullYear()} De Manaus <a aria-label="footer" target="_blank" rel="noreferrer" >Para o Brasil</a></p>
        </Grid>

      </Grid>

    </footer>
  )
};


export default memo(RodapeUm);