import React, { memo } from "react";

import VideoPlayer from '../../../components/VideoPlayer';
import { Container, Grid } from '@mui/material';
import Buttons from '../../../components/Button/Buttons';
import { Form, Formik } from "formik";
import { AnimatePresence, m } from "framer-motion";
import ListaSimples from "../../Listas/ListaSimples";


const HeroTres = (props) => {

    const {btnExtra, btn, subhead, headline, description, list} = props.data;
    const {click, clickExtra, hiddenButtons} = props;

    const urlVideo = 'https://www.shutterstock.com/shutterstock/videos/1074669659/preview/stock-footage-super-slow-motion-of-beautiful-healthy-long-smooth-flowing-brown-hair.webm';

    return (
        <section >
            <VideoPlayer
                className="py-[90px] lg:py-[90px] md:py-[75px] sm:py-[60px] xs:py-[40px] h-full bg-slate-950"
                src={urlVideo}
                loop={true}
                poster="https://via.placeholder.com/1920x1080"
                overlay={["#003840", "#005A5B", "#007369", "#008C72", "#02A676"]}
                opacity="0.9"
            >

                <Container className="">
                    <Grid container className="items-center justify-center content-center z-[1] relative overflow-hidden">
                        <Grid item xl={5} md={6} className="sm:mb-[4px]  overflow-hidden">
                            <h2 className="heading-5 font-serif font-semibold text-[#eff3ef] uppercase mb-[16px]">{subhead}</h2>
                            <h2 className="font-serif py-2 font-bold uppercase text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA] mb-[25px] tracking-[-2px]"> {headline}</h2>
                            
                            <ListaSimples theme="text-gray-100" className="mx-0 list-style-02 w-[95%]" data={list} />
                            {
                                !hiddenButtons ?
                                <div className="xs:text-center mt-20">
                                    <Buttons ariaLabel="link for pricing-packages" onClick={click ? click : null} icon="fa-brands fa-whatsapp" className="mr-[0px] xs:mx-0 xs:w-full sm:mx-[14px] font-serif hover:text-gray-100 uppercase xs:mb-[25px] sm:mb-[25px] md:mb-[15px]" themeColor={["#008C72", "#02A676"]} size="xl" color="#fff" title={btn} />
                                    {btnExtra ? <Buttons ariaLabel="link for modal button" onClick={clickExtra ? clickExtra : null} className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#ffffff" size="xl" title={btnExtra} /> : null}
                                </div>
                                :
                                <></>
                            }
                            
                            
                        </Grid>
                        <Grid item xl={7} md={6} className="text-right items-center xs:mt-5  sm:mt-5 ">
                            <img className="inline-block w-full h-auto object-fill" src="/assets/img/illustrations/escova_1.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </VideoPlayer>
            
        </section>
    );
};


export default memo(HeroTres);