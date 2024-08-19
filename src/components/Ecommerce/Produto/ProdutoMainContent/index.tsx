import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Form, Formik } from 'formik';
import { m, AnimatePresence } from 'framer-motion';
import { Navigation, Thumbs } from "swiper";
import Lightbox from 'react-18-image-lightbox';
import Link from "next/link";
import Buttons from "../../../Button/Buttons";
import { Box, Card, Grid, Stack, Typography, styled, useTheme } from "@mui/material";
import { ProdutoType } from "../../../../types/ProdutoType";
import { DocumentData } from "firebase/firestore";
import Pb from "../../../Pb";
import { getCatName, getCollName } from '../../../../util/constantes'
import { ItemCart } from "../../../../types/ItemCart";
import { useRouter, useSearchParams } from "next/navigation";
import { addToCart } from "../../../../fetchData/cartServices";
import { useUser } from "../../../../context/userContext";

interface PropsProdutoMainContent {
    produto: ProdutoType | undefined | null;
    itemCart: ItemCart | undefined | null;
    processCart: boolean;
    setItemCart: React.Dispatch<any>;
    setProcessCart: React.Dispatch<any>;
};


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
];

const getCategoriaString = (id: number | undefined): string => {
    //if (!id) return '';
    console.log(id);
    return getCatName(id);
    //return String(id);
};

const getColecaoString = (id: number | undefined): string => {
    if (!id) return '';
    console.log(id);
    return getCollName(id);
    //return String(id);
};

const ProdutoMainContent = ({ produto, itemCart, setItemCart, processCart, setProcessCart }: PropsProdutoMainContent) => {

    const router = useRouter();
    const { user } = useUser();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const swiperRef = React.useRef(null)
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const theme = useTheme();

    function handleClick(i: any) {
        setIsOpen(true);
        setPhotoIndex(i);
    };

    const clickAddToCart = async (e: any) => {
        e.preventDefault();
        if(processCart) return;
        setProcessCart(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        addToCart(user.uid, itemCart, (sucess) => {
            //setProcessCart(false);
            if(sucess) {
                router.push(`/carrinho`);
            } else {
                clickComprarAgora(e);
            }
        });

        // const params = new URLSearchParams();
        // const idProd = produto?.id;
        // if (!idProd) return;
        // params.set('prod', idProd);
        // router.push(`/carrinho?${params.toString()}`);
    };

    const clickComprarAgora = (e: any) => {
        e.preventDefault();
        const params = new URLSearchParams();
        const idProd = produto?.id;
        if (!idProd) return;
        params.set('prod', idProd);
        router.push(`/carrinho?${params.toString()}`);
    };

    const updateQuant = (v: number | any) => {
        if (v < 1) return;
        setItemCart((prev: any) => ({
            ...prev,
            quantidade: v
        }));
    };

    if (produto === undefined || processCart) return (
        <Box
            className="py-6"
            justifyContent="center"
            alignItems="center">
            <Pb />
        </Box>
    )

    if (produto === null) {
        return (
            <Box
                className="py-6 flex-1 h-full"
                justifyContent="center"
                alignItems="center">
                <img alt="produto" src='/assets/img/illustrations/produto_2.png' />
                <Typography variant="h3">
                    Produto Indisponivel
                </Typography>
            </Box>
        );
    }

    const mds = produto?.modelos?.length > 0 ? produto.modelos : null;
    const crs = produto?.cores?.length > 0 ? produto.cores : null;
    const tms = produto?.tamanhos?.length > 0 ? produto.tamanhos : null;
    const modelos = mds || crs || tms || null;
    const swiperData = produto?.fotos || [];
    const valor = Number(String(produto?.valor).replace(/\s/g, '') || 0);
    const valorAntigo = Number((0.35 * valor) + valor);
    const valorString = `R$ ${valor.toFixed(2)}`;
    const valorAntigoString = `R$ ${valorAntigo.toFixed(2)}`;

    console.log('Valor: ', valor, produto.valor)

    return (
        <section className="py-[100px] lg:py-[70px] md:py-[55px] sm:py-[30px] xs:py-[15px] single-product">
            <Container>
                <Row>
                    <Grid container className="flex flex-col lg:flex-row md:items-center" >
                        <Grid item lg={7} className="w-[60%] pr-0 mr-0 md:w-full">
                            <Row>
                                <Col lg={{ span: 9, order: 2 }} className="relative product-image md:mb-[10px] px-lg-0">
                                    <Swiper
                                        // style={{
                                        //     "--swiper-navigation-color": "#fff",
                                        //     "--swiper-pagination-color": "#fff",
                                        // }}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Navigation, Thumbs]}
                                        className="mySwiper2 w-full rounded-xl product-images-box">
                                        {
                                            swiperData.map((item, i) => {
                                                return (
                                                    <SwiperSlide className="rounded-xl" key={i} onClick={() => handleClick(i)}>
                                                        <img src={item} alt="products" width="" height="652.8" className="w-full" />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    {isOpen && (
                                        <Lightbox
                                            imageCaption={`${photoIndex + 1} of ${swiperData.length}`}
                                            mainSrc={swiperData[photoIndex]}
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
                                        navigation={swiperData.length > 1 && true}
                                        className="mySwiper overflow-hidden absolute h-full pb-[40px] md:pb-0 md:relative"
                                        breakpoints={{
                                            992: {
                                                direction: "vertical",
                                                autoHeight: true,
                                                //spaceBetween: 15
                                            }
                                        }}
                                    >
                                        {
                                            swiperData.map((item, i) => {
                                                return (
                                                    <SwiperSlide className="overflow-hidden" key={i}>
                                                        <img loading="lazy" src={item} alt="products" width="" height="" className="w-full h-full object-cover rounded-xl" />
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
                        <Grid item lg={5} className="w-[40%] md:w-full product-summary pl-28 lg:pl-20 md:pl-0 sm:pl-2">
                            <div className="breadcrumb text-sm p-0">
                                <ul>
                                    <li><Link aria-label="homepage-link" href="/">Inicio</Link></li>
                                    <li>{getCategoriaString(produto?.categoria)}</li>
                                    <li>{getColecaoString(produto?.colecoes?.at(0))}</li>
                                </ul>
                            </div>
                            <div className="flex items-start my-14 md:my-6">
                                <div className="flex-grow w-3/4 xs:w-[60%]">
                                    <div className="text-darkgray font-semibold text-xlg font-serif mb-[5px]">
                                        {produto?.nome || 'Produto'}
                                    </div>
                                    <span className="text-xmd">
                                        <del className="mr-[8px]">
                                            {valorAntigoString}
                                        </del>
                                        <span className="font-semibold to-green-800">
                                            {valorString}
                                        </span>

                                    </span>
                                </div>
                                <div className="text-end leading-[30px] flex-grow">
                                    <div>
                                        <div className="tracking-[3px]" aria-label="product-rating">
                                            <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                            <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                            <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                            <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                            <i className="fas fa-star text-xxs text-[#ff9c00]"></i>
                                        </div>
                                    </div>
                                    <span className="text-sm hidden">
                                        <span className="text-darkgray">
                                            SKU:
                                        </span>
                                        8552635
                                    </span>
                                </div>
                            </div>
                            <p></p>

                            <div className="mt-16">

                                {
                                    modelos &&
                                    <div className="mb-[20px] shopping-right-left-sidebar flex flex-col">
                                        <label className="text-darkgray text-xs inline-flex font-medium font-serif uppercase w-auto mb-3 mr-[3px]">
                                            Modelos
                                        </label>
                                        <ul className="font-serif flex flex-row flex-wrap list-style filter-category">
                                            {
                                                modelos.map(item => {
                                                    return (
                                                        <li key={item} className="flex w-auto">
                                                            <a aria-label="product-category" rel="noreferrer" onClick={(e) => { }}>
                                                                <span className="product-cb product-category-cb checked" style={{}}></span>
                                                                {item}
                                                            </a>
                                                            <span className="item-qty">
                                                            </span>
                                                        </li>
                                                    );
                                                })
                                            }

                                        </ul>
                                    </div>
                                }


                                <div className="flex flex-wrap">
                                    <div className="mr-[20px] flex mb-6 h-[50px] quantity">
                                        <input type="button" defaultValue="-" onClick={() => updateQuant((itemCart?.quantidade || 0) - 1)} className="qty-minus qty-btn" />
                                        <input className="input-text qty-text" type="" value={itemCart?.quantidade} name="quantity" />
                                        <input type="button" defaultValue="+" onClick={() => updateQuant((itemCart?.quantidade || 0) + 1)} className="qty-plus qty-btn" />
                                    </div>
                                    <Buttons ariaLabel="add-to-cart" onClick={clickAddToCart} className="btn-fill flex flex-1 min-h-[50px] h-full font-semibold font-serif rounded-none uppercase" themeColor={theme.palette.info.dark || "#232323"} color={"#fff"} size="md" title="Adicionar no Carrinho" />
                                    <div className="mt-[6px] w-full">
                                        <Buttons ariaLabel="add-to-cart" onClick={clickComprarAgora} className="btn-fill min-h-[50px] h-full font-semibold font-serif rounded-none uppercase" themeColor={theme.palette.primary.main || "#232323"} color={"#fff"} size="md" title="Comprar agora" />
                                    </div>
                                    <div className="mt-[25px] w-full">
                                        <Link aria-label="add-to-wishlist" onClick={e => e.preventDefault()} href="#" className=" hidden uppercase text-xxs font-serif mr-[25px] font-medium">
                                            <i className="feather-heart text-xmd align-middle mr-[5px]"></i>
                                            Curtir
                                        </Link>
                                        <Link href="#" onClick={e => e.preventDefault()} aria-label="add-to-compare" className="uppercase text-xs font-serif mr-[20px] flex w-fit pr-3 pl-3 border-gray-300 border-[1px] rounded-md font-medium ">
                                            <i className="feather-share-2 text-xmd align-middle mr-[5px]"></i>
                                            <span className="text-center justify-center content-center">
                                                Compartilhar
                                            </span>
                                            
                                        </Link>
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