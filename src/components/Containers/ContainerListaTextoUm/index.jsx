"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import "../../../Assets/scss/components/_textbox.scss"


const ContainerListaTextoUm = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <Container>
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="mb-[6%]">
          <Grid xs={12} sm={10} md={8} lg={10} item>
            <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold mb-[10px] lg:mb-[15px]`}>{props.data.title} 
              <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-darkgray '}`}>{props.data.destaqueTitle}</div>
            </h3>
            <h6 className={`font-serif ${dark ? ' text-gray-400 ' : ' text-darkgray '} text-center mb-[25px] lg:mb-[15px]`}>
              {props.data.description}
            </h6>
          </Grid>
        </Grid>
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className={`${props.grid} ${props.theme} ${props.className}`}>
            {
                props.data.lista.map((item, i) => {
                    return (
                        <Grid item xs={xs ? xs : 12} sm={sm ? sm : 12} md={md ? md : 6} lg={lg ? lg : 4} xl={xl ? xl : 4} className={`feature-box${props.className ? ` ${props.className} ` : "" }`} key={i}>
                            <motion.div className={"feature-box-content " + `${dark ? 'text-gray-300' : 'text-gray-800'}`} >
                                {
                                    (props.theme === "text-box-style-01") ?
                                        <>
                                            <h2>{item.number}</h2>
                                            <span>{item.title}</span>
                                        </> :
                                        <>
                                            <span className={`${dark ? 'text-white' : 'text-gray-800'}`}>{item.title}</span>

                                            <div className="feature-box-number"><span className="bg-purple-600"></span></div>
                                        </>
                                }
                                <p>{item.description}</p>
                            </motion.div>
                        </Grid>
                    )
                })
            }
        </Grid>
      </Container>
    </section>
  )
};


export default memo(ContainerListaTextoUm)