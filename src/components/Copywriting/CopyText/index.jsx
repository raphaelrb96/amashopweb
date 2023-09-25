"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo, useEffect, useState } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import CarrosselQuatro from '../../Carrosseis/CarrosselQuatro'
import TextCopy from '../../Texto/TextCopy'


import "../../../Assets/scss/pages/_startup.scss"



const CopyText = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;

  
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if(!domLoaded) {
    return <></>;
  } else {
    return (
      <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden bg-lightgray">
        <Container className="items-center">
          
          <TextCopy data={props.data} />

        </Container>
      </section>
    );
  }
};


export default memo(CopyText)