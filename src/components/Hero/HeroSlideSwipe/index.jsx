import { Swiper, SwiperSlide } from "swiper/react";
import { m, AnimatePresence } from 'framer-motion'
import { Autoplay, Pagination, Keyboard, Navigation } from "swiper";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import Buttons from "../../Button/Buttons";
import { Box } from "@mui/material";

const SwiperSlideData = [
    {
        img: "./assets/img/baners/compra_2.jpg",
        title: "Descubra as Últimas Tendências em Alta",
        subheader: "Bem-Vindo à Nossa Loja Online"
    },
    {
        img: "./assets/img/baners/entrega_5.jpg",
        title: "Tudo o que você ama, em um só lugar",
        subheader: "Presentes para Todas as Ocasiões"
    },
    {
        img: "./assets/img/baners/pay_online_1.jpg",
        title: "Sua satisfação é nossa prioridade número um",
        subheader: "Confiança em Cada Compra"
    }
]

const index = ({ data }) => {

    const hidden = true;

    return (
        <section className="overflow-hidden h-[102vh] XS:h-[500px] sm:h-[500px]">
            <Swiper
                className="swiper-pagination-light swiper-pagination-medium h-full relative swiper-navigation-04 swiper-navigation-dark travel-agency-slider"
                slidesPerView={1}
                loop={true}
                keyboard={true}
                navigation={true}
                modules={[Pagination, Autoplay, Keyboard, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: true }}
            >
                {
                    (data || SwiperSlideData).map((item, i) => {
                        return (
                            <SwiperSlide key={i} style={{
                                backgroundImage: `url(${item.img})`,
                            }} className="bg-no-repeat	bg-cover bg-center">
                                <Box className="absolute h-full w-full bg-black opacity-60" />
                                <Box className="h-full  text-center justify-center xs:p-0">
                                    <Row className="h-full w-[70%] my-0 mx-auto">
                                        <Col className="h-full justify-center flex-col relative flex xs:p-0">
                                            <span className="mb-[35px] font-medium tracking-[2px] text-white text-xmd font-serif uppercase block sm:text-[16px] sm:mb-[15px] xs:w-full">
                                                {item.subheader}
                                            </span>
                                            <h1 className="mb-[45px] text-shadow-large font-extrabold text-white text-[90px] tracking-[-4px] leading-[85px] font-serif uppercase mx-auto text-shadow lg:text-[80px] md:text-[60px] md:leading-[55px] sm:text-[35px] sm:mb-[30px] sm:tracking-[-1px] sm:leading-[33px] xs:tracking-[-1px] xs:w-full xs:leading-none">
                                                {item.title}
                                            </h1>
                                            <div className={hidden ? "hidden" : "inline-block"}>
                                                <Buttons ariaLabel="link for swiper img" href="#" className="btn-fill font-medium font-serif uppercase rounded-none btn-shadow" size="lg" themeColor="#232323" color="#fff" title="Discover Tour" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Box>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default index;