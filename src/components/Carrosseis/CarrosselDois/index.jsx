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



const CarrosselDois = (props) => {
    const swiperRef = React.useRef(null)


    return (
        <Grid container spacing={2} justifyContent="center" alignContent={'center'} alignItems={'center'} >
            <Grid item xs={10} lg={6} md={5} className="sm:pb-20">
                <div className={`flex flex-col items-center content-center justify-center testimonial-carousel-style-02${props.className ? ` ${props.className}` : ""}`}  {...fadeIn}>
                    <h1 className="font-serif text-center right-0 left-0 font-semibold mb-20 whitespace-pre flex flex-col text-[50px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[80px]">
                        <span> {props.title}</span>&nbsp;{props.subtitle}
                    </h1>
                    {
                        props.carouselOption.navigation && (
                            <div className="flex items-center content-center justify-center">
                                <div onClick={() => swiperRef.current.swiper.slidePrev()} className="btn-slider-next rounded-full flex justify-center items-center transition-default text-black bg-white right-inherit left-[65px] h-[40px] w-[40px] cursor-pointer" >
                                    <i className="feather-arrow-left text-xmd"></i>
                                </div>
                                <div onClick={() => swiperRef.current.swiper.slideNext()} className="btn-slider-prev rounded-full flex justify-center items-center transition-default right-inherit h-[40px] w-[40px] ml-[10px] cursor-pointer" >
                                    <i className="feather-arrow-right text-xmd"></i>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Grid>
            <Grid item xs={11} md={7} lg={6} xl={5} className="relative" {...fadeInLeft}>
                <Swiper
                    {...props.carouselOption}
                    ref={swiperRef}
                    className={`testimonial-carousel-style-02${props.className ? ` ${props.className}` : ""}`}
                    modules={[Pagination, Autoplay]}
                >
                    {props.data.map((item, i) => {
                        return (
                            <SwiperSlide className={'px-4 mt-8'} key={i}>
                                <div>
                                    {item.content && <span className="block mb-12 -tracking-[.5px] text-xlg leading-[38px] md:leading-[32px]"> {item.content} </span>}
                                    <div className="flex items-center">
                                        {item.img && <img width="" height="" className="h-[85px] w-[85px] rounded-full mr-[25px]" src={item.img} alt="" />}
                                        <div className="feature-box-content">
                                            {(item.firstname || item.lastname) && <div className="text-darkgray text-lg font-serif leading-[20px] text-gradient bg-gradient-to-r from-[#5cc088] to-[#dda556] uppercase inline-block xs:text-xmd"><span className="font-semibold">{item.firstname}</span> {item.lastname}</div>}
                                            {item.designation && <span className="font-serif text-md block uppercase mt-[5px]"> {item.designation}</span>}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Grid>
        </Grid>
    );
};


CarrosselDois.propTypes = {
    grid: PropTypes.string,
    theme: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            img: PropTypes.string,
            designation: PropTypes.string,
            content: PropTypes.string,
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            title: PropTypes.string,
            thumbimg: PropTypes.string,
        })
    ),
}

export default memo(CarrosselDois);