import React, { memo, useRef, useState } from "react";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { PropTypes } from "prop-types";
import { Grid, Typography } from "@mui/material";
import { fadeIn, fadeInLeft } from "../../../functions/GlobalAnimations";

import "../../../Assets/scss/pages/_marketingagency.scss"


const CarrosselSeis = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null)
  const swiperThumbRef = useRef(null);

  // Change the slide on thumbnail click
  const handleSlideClick = () => {
    const target = swiperThumbRef.current.swiper
    if (target.activeIndex > target.clickedIndex) {
      target.slidePrev();
    } else if (target.activeIndex < target.clickedIndex) {
      target.slideNext()
    }
  }

  const slideprev = () => {
    if (swiperRef.current.swiper.activeIndex === 0) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.slides.length - 1)
    } else {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex - 1)
    }

    swiperThumbRef.current.swiper.slidePrev()
  }

  const slidenext = () => {
    let total_length = swiperRef.current.swiper.slides.length;

    if (swiperRef.current.swiper.params.loop === true) {
      total_length = swiperRef.current.swiper.slides.length - swiperRef.current.swiper.loopedSlides * 2
    }

    if (swiperRef.current.swiper.activeIndex === total_length - 1) {
      swiperRef.current.swiper.slideTo(1)
    } else {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 1)
    }

    swiperThumbRef.current.swiper.slideNext()
  }

    return (
      <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className={props.className}>
        
        <Grid alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="flex" xs={1}>
          <button aria-label='swiper btn' onClick={slideprev} className="swiper-prev top-0 bottom-0 pl-0 text-[20px] sm:text-[22px] md:text-[36px] lg:text-[45px] xl:text-[50px]"><i className="line-icon-Arrow-OutLeft text-extra-light-gray text-[#b7b7b7]"></i></button>
        </Grid>

        <Grid spacing={1} xs={10} md={9} className="">

          <Swiper
            {...props.carouselOption}
            ref={swiperRef}
            spaceBetween={15}
            allowTouchMove={false}
            loop={true}
            modules={[Thumbs, Autoplay]}
            thumbs={{ swiper: (thumbsSwiper && !thumbsSwiper.destroyed) ? thumbsSwiper : null }}
            className="">
            {
              props.data.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    {item.content && <h5 className="mb-0 font-light text-center text-coolgray" >{item.content}</h5>}
                    {(item.firstname || item.lastname) && <span className="font-serif uppercase block text-green-700 font-semibold text-xlg text-gradient bg-gradient-to-r from-[#C7FFED] via-[#D8FFDB] to-[#DAFDBA]" >{item.firstname} {item.lastname}</span>}
                    {item.designation && <span className="font-serif uppercase block tracking-[1px] text-green-300 text-md" >{item.designation}</span>}
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

          <Swiper
            {...props.carouselOption}
            ref={swiperThumbRef}
            onSwiper={setThumbsSwiper}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            spaceBetween={15}
            slidesPerView={1}
            watchSlidesProgress={true}
            modules={[Thumbs, Autoplay]}
            className="mt-[24px] px-3"
            onClick={handleSlideClick}>
            {
              props.data.map((item, i) => {
                return (
                  <SwiperSlide className="" key={i}>
                    {item.img && <img width="" height="" className="rounded-3xl w-full h-full min-h-[250px] object-cover mx-auto" alt="" src={item.img} />}
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

          

        </Grid>

        <Grid alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="flex" xs={1}>
          <button aria-label='swiper btn' onClick={slidenext} className="swiper-next pr-0  text-[20px] sm:text-[22px] md:text-[36px] lg:text-[45px] xl:text-[50px]"><i className="line-icon-Arrow-OutRight text-extra-light-gray text-[#b7b7b7]"></i></button>
        </Grid>
      </Grid>
    );
};


export default memo(CarrosselSeis);