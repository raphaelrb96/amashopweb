"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";
import { Container, Grid } from "@mui/material";
import { useRef } from "react";
import Buttons from "../../Button/Buttons";


const HeroDois = ({itens}) => {
    const swiperRef = useRef(null);
    if(!itens) return <></>;
    return (
        <section className="overflow-hidden landscape:md:h-[600px] relative">
            <Swiper
                ref={swiperRef}
                style={{ cursor: `url(/assets/img/webp/icon-move-light.webp)` }}
                modules={[Autoplay, Keyboard]}
                keyboard={{ enabled: true, onlyInViewport: true }}
                loop={true}
                slidesPerView={1}
                className="white-move">
                    {
                        itens.map((item, i) => {
                            return (
                                <SwiperSlide key={i} className="bg-no-repeat py-[126px] lg:py-64 xl:py-64 bg-cover relative overflow-hidden bg-center" style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className="absolute h-full w-full opacity-70 bg-slate-800 top-0 left-0 "></div>
                                    <Container>
                                        <Grid container className="justify-center h-full">
                                            <Grid item lg={10} xl={8} className="relative flex flex-col justify-center text-center h-full px-[0px] xs:px-[15px] landscape:md:h-[600px]">
                                                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                                <div className="font-medium flex justify-center font-serif uppercase xs:block">
                                                    <div className="xs:mb-[15px]">
                                                        <Buttons ariaLabel="our-services" to="/page/our-services" className="btn-fill btn-fancy font-medium tracking-[1px] rounded-none mr-[10px] xs:mr-0" themeColor="#fff" color="#232323" size="md" title="Explore services" />
                                                    </div>
                                                    <div>
                                                        <Buttons ariaLabel="home link" to="/" className="mx-[10px] font-medium btn-fancy tracking-[1px] rounded-none btn-transparent hover:text-black" themeColor="#fff" size="md" color="#fff" icon="fas fa-arrow-right right-icon ml-[20px]" iconPosition="after" title="Discover litho" />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
            {
                <>
                    <div onClick={() => swiperRef.current.swiper.slidePrev()} className="absolute top-1/2 left-[40px] z-[1] -translate-y-1/2 cursor-pointer slider-navigation-style-07 swiper-button-previous-nav xs:left-[20px]">
                        <i className="line-icon-Arrow-OutLeft text-[40px] text-white flex justify-center items-center rounded-full h-[50px] w-[50px] text-center sm:h-[40px] sm:w-[40px] "></i>
                    </div>
                    <div onClick={() => swiperRef.current.swiper.slideNext()} className="absolute top-1/2 right-[40px] z-[1] -translate-y-1/2 cursor-pointer slider-navigation-style-07 swiper-button-next-nav  xs:right-[20px]">
                        <i className="line-icon-Arrow-OutRight text-[40px] text-white flex justify-center items-center rounded-full h-[50px] w-[50px] text-center sm:h-[40px] sm:w-[40px]"></i>
                    </div>
                </>
            }
        </section>
    )
}

export default HeroDois