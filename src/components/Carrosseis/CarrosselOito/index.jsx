import React, { memo } from "react";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { PropTypes } from "prop-types";
import { Grid, Typography } from "@mui/material";
import { fadeIn, fadeInLeft } from "../../../functions/GlobalAnimations";
import "../../../Assets/scss/pages/_marketingagency.scss"


const CarrosselOito = (props) => {
    const swiperRef = React.useRef(null)

    return (
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'} className={props.className}>

          {
              props.carouselOption.navigation && (
                  <Grid alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="flex" item xs={1} sm={2} md={2}>
                      <button onClick={() => swiperRef.current.swiper.slidePrev()} className="text-[#333045] text-sm leading-[40px] font-semibold  border-r border-solid border-mediumgray pr-6 py-7 hover:opacity-70 sm:pr-[8px] hidden sm:hidden md:block lg:flex xl:flex">VOLTAR</button>
                  </Grid>
              )
          }

        <Grid className="flex px-3" xs={12} sm={8} md={8} item>
            <Swiper
              className="testimonial-carousel-style-08 text-center"
              {...props.carouselOption}
              ref={swiperRef}
              modules={[Pagination, Autoplay]}>
              {
                  props.data.map((item, i) => {
                      return (
                          <SwiperSlide key={i}>
                              <div className="w-100">
                                  {item.img && <img width="70px" height="49.14px" className="mx-auto w-20 mb-[50px]" alt="" src={item.img} />}
                                  {item.content && <p className="w-[90%] mb-[40px] text-lg leading-[36px] mx-auto xs:w-full xs:leading-[30px] xs:text-xmd">{item.content}</p>}
                                  {(item.firstname || item.lastname) && <span className="font-serif uppercase block font-medium text-[#ea9d8d]">{item.firstname} {item.lastname}</span>}
                                  {item.designation && <span className="font-serif text-sm uppercase block">{item.designation}</span>}
                              </div>
                          </SwiperSlide>
                      )
                  })
              }
            </Swiper>
        </Grid>
          
          {
              props.carouselOption.navigation && (
                  <Grid alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="flex" item xs={1} sm={2} md={2}>
                      <button onClick={() => swiperRef.current.swiper.slideNext()} className="text-[#333045] text-sm leading-[40px] font-semibold border-l border-solid border-mediumgray pl-6 py-7 hover:opacity-70 sm:pl-[8px] hidden sm:hidden md:flex lg:flex xl:flex">PASSAR</button>
                  </Grid>
              )
          }
      </Grid>
  )
};


export default memo(CarrosselOito);