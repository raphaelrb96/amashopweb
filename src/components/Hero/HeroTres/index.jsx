import React, { memo } from "react";

import VideoPlayer from '../../../components/VideoPlayer';
import { Container, Grid, Typography } from '@mui/material';
import Buttons from '../../../components/Button/Buttons';
import { Form, Formik } from "formik";
import { AnimatePresence, m } from "framer-motion";
import ListaSimples from "../../Listas/ListaSimples";
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditScoreIcon from '@mui/icons-material/CreditScore';


const HeroTres = (props) => {

    const { btnExtra, btn, subhead, headline, description, list } = props.data;
    const { click, clickExtra, hiddenButtons } = props;

    const urlVideo = 'https://www.shutterstock.com/shutterstock/videos/1074669659/preview/stock-footage-super-slow-motion-of-beautiful-healthy-long-smooth-flowing-brown-hair.webm';

    return (
        <section >
            <VideoPlayer
                className="py-[60px] lg:py-[60px] md:py-[55px] sm:py-[50px] xs:py-[40px] h-full bg-slate-950"
                src={urlVideo}
                loop={true}
                poster="https://via.placeholder.com/1920x1080"
                overlay={["#003840", "#005A5B", "#007369", "#008C72", "#02A676"]}
                opacity="0.9"
            >

                <Container className="">
                    <Grid container className="items-start justify-center content-center z-[1] relative overflow-hidden">
                        <Grid item md={6} className="sm:mb-[4px]  overflow-hidden">
                            <h6 className="font-serif font-semibold text-[#eff3ef] uppercase mb-[16px]">{subhead}</h6>
                            <h2 className="font-serif py-2 font-bold uppercase text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA] mb-[25px] tracking-[-2px]"> {headline}</h2>

                            <ListaSimples theme="text-gray-100 my-0" className="mx-0 list-style-02 w-[95%]" data={list} />
                            {
                                !hiddenButtons ?
                                    <div className="xs:text-center mt-20 mb-5">
                                        <Buttons ariaLabel="link for pricing-packages" onClick={click ? click : null} icon="fa-solid fa-money-bill-wave" className="mr-[0px] xs:mx-0 xs:w-full sm:mx-[14px] font-serif hover:text-gray-100 uppercase mb-[25px]" themeColor={["#008C72", "#02A676"]} size="xl" color="#fff" title={btn} />
                                        {btnExtra ? <Buttons ariaLabel="link for modal button" onClick={clickExtra ? clickExtra : null} className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#ffffff" size="xl" title={btnExtra} /> : null}

                                        <span className="flex items-center justify-center sm:mb-[4px] mb-[6px]">
                                            <CreditScoreIcon className={`text-[18px] text-white mr-3`}/>
                                            <Typography className="text-[12px] font-medium text-white text-center" variant="p">
                                                PAGAMENTO ONLINE SEGURO
                                            </Typography>
                                            
                                        </span>
                                        <span className="flex items-center justify-center sm:mb-[6px] mb-[16px]">
                                            <GppGoodIcon className={`text-[18px] text-white mr-3`}/>
                                            <Typography className="text-[12px] font-medium text-white text-center" variant="p">
                                                GARANTIA DE 90 DIAS 
                                            </Typography>
                                            
                                        </span>

                                    </div>
                                    :
                                    <></>
                            }


                        </Grid>
                        <Grid item md={6} className="text-right items-center justify-start xs:mt-10 sm:mt-10 md:mt-0">
                            <img className="inline-block w-full h-auto object-fill" src="/assets/img/illustrations/escova_1.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </VideoPlayer>

        </section>
    );
};


export default memo(HeroTres);