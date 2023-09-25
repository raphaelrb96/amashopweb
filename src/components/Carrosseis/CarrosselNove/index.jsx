import React, { memo, useCallback, useState } from "react";

// Libraries
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { PropTypes } from "prop-types";
import { Container, Grid, Typography } from "@mui/material";
import { fadeIn, fadeInLeft } from "../../../functions/GlobalAnimations";

import "../../../Assets/scss/pages/_marketingagency.scss";
import "../../../Assets/scss/components/_textslider.scss";



const CarrosselNove = (props) => {

    const [swiperRef, setSwiperRef] = useState(undefined);

    const handleNext = useCallback(() => {
      swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <div className={`${props.className}`}>
          <Swiper
            className="text-slider-02 black-move"
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{ 1200: { slidesPerView: 2 }, 900: { slidesPerView: 1 } }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            slidesPerView={1}
            centeredSlides={true}
            onSwiper={setSwiperRef}
            spaceBetween={60}
            loop={true}
          >
              {
                props.data.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                        <div className="cover-background items-start flex h-[150%] justify-end p-[4.5rem] lg:p-12 md:p-16 xs:p-12" style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="absolute w-full top-0 left-0 overlay bg-darkgray"></div>
                            <div className="text-wrapper flex flex-col w-[50%] bg-white box-shadow-extra-large no-transition p-[4.5rem] pt-0 slider-zoom-content z-[1] relative xl:w-[75%] xl:p-[3rem] lg:w-[80%] lg:p-[2.5rem] md:w-[55%] md:p-[4.5rem] sm:w-[60%] xs:w-full">
                                <h3 className="heading-3 -mt-20 -mr-8 mb-10 ml-auto w-20 text-[#fff] text-center pb-4 pt-24 bg-purple-800 text-[40px] leading-[3.4rem] font-medium font-serif self-end lg:w-[75px] md:mt-[-50px]">
                                  {i + 1 >= 10 ? "" : "0"}{i + 1}
                                </h3>
                                <h4 className="heading-5 font-serif text-darkgray text-[2.0rem] leading-[3rem] p-0 mb-[25px] -tracking-[.5px] lg:mb-[15px] md:text-[22px] sm:text-[20px]">
                                  <span className="font-semibold block mr-[5px] lg:w-[60%] md:block xs:block">
                                    {item.title}
                                  </span>
                                  {item.subtitle}
                                </h4>
                                {item.content && <p className="text-xmd mb-[25px] leading-[32px] md:mb-[20px] xs:mb-[15px]">{item.content}</p>}
                                {(item.buttonTitle || item.buttonLink) && <a aria-label="textslider" onClick={handleNext} className="font-medium text-darkgray font-serif no-underline hover:text-[#969896] cursor-pointer" to={item.buttonLink ? item.buttonLink : "#"} >{item.buttonTitle}<i className="line-icon-Arrow-OutRight text-[40px] inline-block ml-[15px] align-middle"></i></a>}
                            </div>
                        </div>
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
        
        </div>
    );
};


export default memo(CarrosselNove);