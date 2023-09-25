"use client"

import { Container, Grid, Link } from "@mui/material"
import { memo } from "react"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"
import "../../../Assets/scss/components/_rotatebox.scss"


const BannerRotativo = (props) => {
  
    return (
        <Grid justifyContent="space-around" className={`${props.grid} ${props.className ? ` ${props.className}` : ""}`} container>
            {
                    props.data.map((item, i) => {
                        return (
                            <Grid className="" xs={12} sm={12} md={4} lg={4} item key={i}>
                                <div
                                    className="rm-rotate-box px-3 xs:mt-8 sm:mt-5 md:mt-3 text-center"
                                    initial={{ opacity: 0, transform: "perspective(400px) rotateY(90deg)" }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 100, duration: 1 }}
                                >
                                    <div className="flipper to-left">
                                        <div className="thumb-wrap">
                                            <div className="card-side front overflow-hidden rounded-[4px] h-[490px] lg:h-[450px]" style={{ backgroundImage: `url(${item.img})` }}>
                                                <div className="absolute top-0 left-0 w-full h-full opacity-70 overlay-rotatebox"></div>
                                                <div className="content-wrap px-[15px]">
                                                    <span className="text-white text-lg tracking-[1px] uppercase font-serif inline-block font-medium mb-[10px]">{item.title}</span>
                                                    <span className="text-white opacity-60 text-md uppercase tracking-[.5px] font-serif block">{item.subtitle}</span>
                                                </div>
                                            </div>
                                            <div className="card-side back rounded-[4px] overflow-hidden">
                                                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#007369] via-[#008C72] to-[#02A676]"></div>
                                                <div className="content-wrap p-[60px] lg:px-[30px] md:px-[40px] xs:p-[30px]">
                                                    <i className={`${item.icon} text-[50px] text-white mb-[35px] inline-block`}></i>
                                                    <span className="text-white text-xmd tracking-[1px] font-medium uppercase font-serif block mb-[10px]">{item.title}</span>
                                                    <p className="text-white opacity-70 mb-[25px]">{item.content}</p>
                                                    <Buttons ariaLabel="pricing table" href={item.btnLink} className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-white hover:text-white px-1 hover:bg-transparent hover:font-bold hover:text-[16px] text-white" color="#f2f2f2" size="xl" title={item.btnTitle} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
        </Grid>
    )
};


export default memo(BannerRotativo)