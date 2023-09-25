"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"

import "../../../Assets/scss/components/_testimonials.scss"



const DepoimentoUm = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="bg-lightgray py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] border-t">
      <Container>
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center">
          <Grid xs={12} sm={10} md={8} lg={10} item className="text-center mb-[6%]">
            <h6 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-medium mb-[5px] lg:mb-[5px]`}>
              {props.data.subhead}
            </h6>
            <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold mb-[10px] lg:mb-[15px]`}>
              <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-gradient bg-gradient-to-r from-[#4e3167] via-[#6a3496] to-[#8828dc]'}`}>{props.data.title}</div>
            </h3>
          </Grid>
        </Grid>

        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className={`${props.className}`}>
            {
                props.data.lista.map((item, i) => {
                    return (
                        <Grid item xs={xs ? xs : 10} sm={sm ? sm : 8} md={md ? md : 4} lg={lg ? lg : 4} xl={xl ? xl : 4} className={`feature-box${props.className ? ` ${props.className} ` : "" }`} key={i}>
                            <div className={`${props.theme}`}>
                                <div className="testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded">
                                    {item.content && <p className="mb-0">{item.content}</p>}
                                </div>
                                <div className="px-[20px] flex items-center">
                                    {item.img && <img width="" height="" className="rounded-circle object-cover w-[60px] h-[60px] mr-[19px]" src={item.img} alt="" />}
                                    <div className="inline-block align-middle">
                                        {item.name && <span className="font-serif text-md font-medium leading-[24px] text-darkgray block">{item.name}</span>}
                                        {item.designation && <span className="block text-sm">{item.designation}</span>}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    )
                })
            }
        </Grid>
      </Container>
    </section>
  )
};


export default memo(DepoimentoUm)