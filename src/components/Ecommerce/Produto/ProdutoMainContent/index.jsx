import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Form, Formik } from 'formik';
import { m, AnimatePresence } from 'framer-motion';
import { Navigation, Thumbs } from "swiper";
import Lightbox from 'react-18-image-lightbox';
import Link from "next/link";
import Buttons from "../../../Button/Buttons";
import { Grid } from "@mui/material";

const swiperData = [
    {
        img: "https://via.placeholder.com/600x765"
    },
    {
        img: "https://via.placeholder.com/600x765"
    },
    {
        img: "https://via.placeholder.com/600x765"
    },
    {
        img: "https://via.placeholder.com/600x765"
    },
    {
        img: "https://via.placeholder.com/600x765"
    },
    {
        img: "https://via.placeholder.com/600x765"
    }
]

const ProdutoMainContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const swiperRef = React.useRef(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleClick = (i) => {
        setIsOpen(true)
        setPhotoIndex(i)
    }

    return (
        <section className="py-[120px] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:py-[30px] overflow-hidden single-product">
            <Container>
                <Row>
                    <Grid container className="col-12 pr-[6px] flex" >
                        <Grid item xs={12} md={6} className="w-[60%] pr-0 mr-0 sm:w-full">
                            <Row>
                                <Col lg={{ span: 9, order: 2 }} className="relative product-image md:mb-[10px] px-lg-0">
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                        }}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Navigation, Thumbs]}
                                        className="mySwiper2 w-full product-images-box">
                                        {
                                            swiperData.map((item, i) => {
                                                return (
                                                    <SwiperSlide key={i} onClick={() => handleClick(i)}>
                                                        <img src={item.img} alt="products" width="512" height="652.8" className="w-full" />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    {isOpen && (
                                        <Lightbox
                                            imageCaption={`${photoIndex + 1} of ${swiperData.length}`}
                                            mainSrc={swiperData[photoIndex].img}
                                            onCloseRequest={() => setIsOpen(false)}
                                            nextSrc={swiperData[(photoIndex + 1) % swiperData.length]}
                                            prevSrc={swiperData[(photoIndex + swiperData.length - 1) % swiperData.length]}
                                            onMovePrevRequest={() =>
                                                setPhotoIndex((photoIndex + swiperData.length - 1) % swiperData.length)
                                            }
                                            onMoveNextRequest={() =>
                                                setPhotoIndex((photoIndex + 1) % swiperData.length)
                                            }
                                            reactModalProps={{ contentLabel: "Example Modal" }}
                                        />
                                    )}
                                </Col>
                                <Col lg={{ order: 1, span: 3 }} className="relative single-product-thumb flex justify-center md:mb-[50px] sm:mb-[40px]">
                                    <Swiper
                                        ref={swiperRef}
                                        direction="horizontal"
                                        onSwiper={setThumbsSwiper}
                                        
                                        spaceBetween={15}
                                        slidesPerView={3.2}
                                        modules={[Navigation, Thumbs]}
                                        navigation={{ el: ".swiper-thumb-next-prev" }}
                                        className="mySwiper h-full md:flex-1 lg:flex-1 xl:flex-1 absolute xs:relative sm:relative md:relative"
                                        breakpoints={{
                                            992: {
                                                direction: "vertical",
                                                autoHeight: true,
                                            }
                                        }}
                                    >
                                        {
                                            swiperData.map((item, i) => {
                                                return (
                                                    <SwiperSlide className="h-full" key={i}>
                                                        <img loading="lazy" src={item.img} alt="products" width="" height="" className="w-full h-full" />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                    {/* <div className="swiper-thumb-next-prev text-center"> */}
                                    {/* <div className="swiper-thumb-prev" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <i className="fa fa-chevron-up"></i>
                      </div>
                      <div className="swiper-thumb-next" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <i className="fa fa-chevron-down"></i>
                      </div> */}
                                    {/* </div> */}
                                </Col>
                            </Row>
                        </Grid>
                        <Grid item xs={12} md={6} className="w-[40%] sm:w-full pl-28 lg:pl-20 sm:pl-2">
                            <div className="breadcrumb text-sm p-0">
                                <ul>
                                    <li><Link aria-label="homepage-link" href="/">Home</Link></li>
                                    <li><Link aria-label="shop-link" href="/shop/shop-wide">Shop</Link></li>
                                    <li>Men hooded</li>
                                </ul>
                            </div>
                            <div className="flex items-center my-14 md:my-6">
                                <div className="flex-grow">
                                    <div className="text-darkgray font-medium text-xlg font-serif mb-[5px]">Men hooded</div>
                                    <span className="text-xmd">
                                        <del className="mr-[8px]">$480.00</del>
                                        £50.00</span>
                                </div>
                                <div className="text-end leading-[30px]">
                                    <div><Link href="#" className="tracking-[3px]" aria-label="product-rating">
                                        <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                        <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                        <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                        <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                        <i className="fas fa-star text-xxs text-[#ff9c00]"></i></Link>
                                    </div>
                                    <span className="text-sm"><span className="text-darkgray">SKU: </span>8552635</span>
                                </div>
                            </div>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the standard dummy text typesetting industry.</p>
                            <div className="mt-16">
                                <div className="mb-[20px] flex items-center">
                                    <label className="text-darkgray text-xs font-medium font-serif uppercase w-[60px] mr-[3px]">color</label>
                                    <ul className="font-serif flex shop-color">
                                        <li>
                                            <input className="hidden" type="radio" id="color-1" value="1" name="color" defaultChecked />
                                            <label htmlFor="color-1"><span className="after:text-white after:z-[12] after:text-[500px]" style={{ backgroundColor: "#363636" }}></span></label>
                                        </li>
                                        <li>
                                            <input className="hidden" type="radio" id="color-2" value="2" name="color" />
                                            <label htmlFor="color-2"><span style={{ backgroundColor: "#657fa8" }}></span></label>
                                        </li>
                                        <li>
                                            <input className="hidden" type="radio" id="color-3" value="3" name="color" />
                                            <label htmlFor="color-3"><span style={{ backgroundColor: "#936f5e" }}></span></label>
                                        </li>
                                        <li>
                                            <input className="hidden" type="radio" id="color-4" value="4" name="color" />
                                            <label htmlFor="color-4"><span style={{ backgroundColor: "#97a27f" }}></span></label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-16 flex items-center">
                                    <label className="text-darkgray text-xs font-medium font-serif uppercase w-[60px] mr-[3px]">Size</label>
                                    <ul className="text-xs flex shop-size">
                                        <li>
                                            <input className="d-none" type="radio" id="size-1" value="1" name="size" defaultChecked />
                                            <label htmlFor="size-1"><span>S</span></label>
                                        </li>
                                        <li>
                                            <input className="d-none" type="radio" id="size-2" value="2" name="size" />
                                            <label htmlFor="size-2"><span>M</span></label>
                                        </li>
                                        <li>
                                            <input className="d-none" type="radio" id="size-3" value="3" name="size" />
                                            <label htmlFor="size-3"><span>L</span></label>
                                        </li>
                                    </ul>

                                </div>
                                <div className="flex flex-wrap">
                                    <div className="mr-[20px] quantity">
                                        <input type="button" defaultValue="-" className="qty-minus qty-btn" />
                                        <input className="input-text qty-text" type="" name="quantity" />
                                        <input type="button" defaultValue="+" className="qty-plus qty-btn" />
                                    </div>
                                    <Buttons ariaLabel="add-to-cart" onClick={(e) => e.preventDefault()} className="btn-fill font-medium font-serif rounded-none uppercase" themeColor="#232323" color="#fff" size="md" title="add to cart" />
                                    <div className="mt-[25px] w-full">
                                        <Link aria-label="add-to-wishlist" onClick={e => e.preventDefault()} href="#" className="uppercase text-xs font-serif mr-[25px] font-medium"><i className="feather-heart align-middle mr-[5px]"></i>Add to wishlist</Link>
                                        <Link href="#" onClick={e => e.preventDefault()} aria-label="add-to-compare" className="uppercase text-xs font-serif mr-[20px] font-medium "><i className="feather-shuffle align-middle mr-[5px]"></i>Add to compare</Link>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Row>
            </Container>
        </section>
    );
}

export default ProdutoMainContent;