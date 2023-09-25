"use client"

import { Grid, Link, Container } from "@mui/material";
import { memo } from "react";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


const RodapeUm = (props) => {

  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;

  return (
      <footer className="py-[30px] px-[30px] w-full ">

          <Grid container alignItems={"center"} justifyContent={"center"} alignContent={"center"} className="items-center">

            <Grid lg={5} md={5} sm={12} xs={12} className="sm:mb-[15px] md:order-2" item>
              <ul className="flex xs:flex-col sm:text-center sm:justify-center gap-x-[35px] md:gap-x-[20px] gap-y-[7px]">
                <li><a aria-label="link for" to="/about-us" className="hover:text-gray-50 text-gray-200">Compre com confiança e segurança. </a></li>
              </ul>
            </Grid>

            <Grid lg={2} md={2} sm={12} xs={12} className="md:order-2 xs:order-1 text-center md:mb-[20px] flex justify-center flex-col items-center" item>
              <div className=""><img src="/assets/img/logomarca_ama.png" alt="" height="" width="" className="w-[150px] object-contain" /></div>
                
            </Grid>

            <Grid lg={5} md={5} sm={12} xs={12} className="md:order-2 text-right sm:text-center" item>
                <p className="underline underline-offset-4 hover:text-gray-50 text-gray-200 font-medium">© {new Date().getFullYear()} De Manaus <a aria-label="footer" target="_blank" rel="noreferrer" >Para o Brasil</a></p>
                
            </Grid>

          </Grid>

      </footer>
  )
};


export default memo(RodapeUm);