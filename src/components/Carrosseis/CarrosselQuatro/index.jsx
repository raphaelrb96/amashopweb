import React, { memo } from "react";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { PropTypes } from "prop-types";
import { Container, Grid, Typography } from "@mui/material";
import { fadeIn, fadeInLeft } from "../../../functions/GlobalAnimations";
import "../../../Assets/scss/pages/_marketingagency.scss"




const CarrosselQuatro = (props) => {
    const swiperRef = React.useRef(null);

    return (
        <div className={`relative ${props.className}`}>
          <Swiper
            ref={swiperRef}
            {...props.carouselOption}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 150,
              modifier: 1.5,
              slideShadows: true
            }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Keyboard]}
            className="py-20 testimonial-carousel-style-04">
            <div className="flex flex-row">
              {
                props.data.map((item, i) => {
                  return (
                    <SwiperSlide className="pt-[5px] mt-[100px] xs:mt-[75px]" key={i}>
                      <div className="bg-[#283234] justify-center relative px-20 pb-[4.5rem] pt-32 md:px-[3rem]">
                        {item.img && <img className="mx-auto w-[250px] h-[250px] object-cover border-white border-8 rounded-full absolute top-0 left-1/2 shadow-[0_0_60px_rgba(0,0,0,17%)] -translate-x-1/2 -translate-y-1/2 xs:shadow-[0_0_20px_rgba(0,0,0,0.08)]" alt="" src={item.img} />}
                        <div>
                          {item.title && <span className="mb-[10px] font-medium text-white text-xmd text-center md:mt-18 mt-24 block">{item.title}</span>}
                          {item.content && <p className="text-center">{item.content}</p>}
                        </div>
                        {(item.firstname || item.lastname) && <div className="text-center text-purple-600 text-md uppercase font-medium">{item.firstname} {item.lastname}</div>}
                        {item.designation && <div className="text-center leading-[20px] text-[14px]">{item.designation}</div>}
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </div>
          </Swiper>
          {
            props.carouselOption.navigation && (
              <div className="flex">
                <div onClick={() => swiperRef.current.swiper.slidePrev()} className="btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] left-[-90px] right-auto">
                  <i className="feather-arrow-left text-xmd"></i>
                </div>
                <div onClick={() => swiperRef.current.swiper.slideNext()} className="btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] right-[-90px] left-auto">
                  <i className="feather-arrow-right text-xmd"></i>
                </div>
              </div>
            )
          }
        </div>
    );
};


export default memo(CarrosselQuatro);