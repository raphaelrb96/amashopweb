import { Swiper, SwiperSlide } from "swiper/react";
import { m, AnimatePresence } from 'framer-motion'
import { Autoplay, Pagination, Keyboard, Navigation } from "swiper";
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import Buttons from "../../Button/Buttons";

const SwiperSlideData = [
    {
      img: "https://via.placeholder.com/1920x1080",
      title: "Deserts discovery",
    },
    {
      img: "https://via.placeholder.com/1920x1080",
      title: "Beaches discover",
    },
    {
      img: "https://via.placeholder.com/1920x1080",
      title: "Summer season",
    }
  ]

const index = ({data}) => {
    return (
        <section className="overflow-hidden lg:m-0 lg:p-0 lg:h-[102vh] md:h-[650px] sm:h-[500px]">
            <Swiper
                className="white-move swiper-pagination-light swiper-pagination-medium h-full relative swiper-navigation-04 swiper-navigation-dark travel-agency-slider"
                slidesPerView={1}
                loop={true}
                keyboard={true}
                navigation={true}
                modules={[Pagination, Autoplay, Keyboard, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
            >
                {
                    (data || SwiperSlideData).map((item, i) => {
                        return (
                            <SwiperSlide key={i} style={{ backgroundImage: `url(${item.img})` }} className="bg-no-repeat	bg-cover	overflow-hidden bg-center">
                                <Container className="h-full  text-center justify-center xs:p-0">
                                    <Row className="h-full w-[70%] my-0 mx-auto">
                                        <Col className="h-full justify-center flex-col relative flex xs:p-0">
                                            <span className="mb-[35px] font-medium tracking-[2px] text-white text-xmd font-serif uppercase block sm:text-[16px] sm:mb-[15px] xs:w-full"> Package start only $250 </span>
                                            <h1 className="mb-[45px] text-shadow-large font-extrabold text-white text-[100px] tracking-[-4px] leading-[95px] font-serif uppercase mx-auto text-shadow lg:text-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:mb-[30px] sm:tracking-[-1px] sm:leading-[43px] xs:tracking-[-1px] xs:w-full xs:leading-none"> {item.title} </h1>
                                            <div className="inline-block">
                                                <Buttons ariaLabel="link for swiper img" href="#" className="btn-fill font-medium font-serif uppercase rounded-none btn-shadow" size="lg" themeColor="#232323" color="#fff" title="Discover Tour" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default index;