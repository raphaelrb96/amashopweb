"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo, useEffect, useState } from "react"


import "../../../Assets/scss/pages/_startup.scss";



const TextCopy = (props) => {

  const {dark} = props;

  
    return (
          <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center ">
              <Grid sm={12} lg={10} item className="text-center mb-[26px]">
                  <h6 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-medium mb-[15px] lg:mb-[15px]`}>
                    {props.data.subTitle}
                  </h6>
                  <h2 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} w-full text-center tracking-[-2px] uppercase font-bold mb-[10px] lg:mb-[15px]`}>
                    <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-gradient bg-gradient-to-r from-[#007369] via-[#008C72] to-[#02A676]'}`}>
                      {props.data.title}
                    </div>
                  </h2>
              </Grid>
              <Grid lg={6} sm={9} className="text-center pt-1" item>
                <h4 className="font-sans leading-[3rem] text-darkgray font-semibold w-[100%] lg:w-full">
                  {props.data.headline}
                </h4>
              </Grid>
          </Grid>
    );
  
};


export default memo(TextCopy)