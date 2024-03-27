import React, { useState } from 'react'

// Libraries
import { Col, Container, Nav, Navbar, Row, Tab } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Form, Formik } from 'formik';
import { m, AnimatePresence } from 'framer-motion';
import { Navigation, Thumbs } from "swiper";
import Lightbox from 'react-18-image-lightbox';
import { fadeIn } from '../../../../functions/GlobalAnimations';
import Lists from '../../../Listas/Lists/Lists';
import { Input } from '../../../Form/Form'
import { ContactFormStyle02Schema } from '../../../Form/FormSchema';
import { resetForm } from '../../../../Functions/Utilities';
import Buttons from '../../../Button/Buttons';
import MessageBox from '../../../MessageBox/MessageBox';
import Link from 'next/link';


const ListData = [
    {
      content: "Made from soft yet durable 100% organic cotton twill"
    },
    {
      content: "Front and back yoke seams allow a full range of motion"
    },
    {
      content: "Comfortable nylon-bound elastic cuffs seal in warmth"
    },
    {
      content: "Hem adjusts by pulling cord in handwarmer pockets"
    },
    {
      content: "Interior storm flap and zipper garage at chin for comfort"
    }
  ]

const ProdutoTabDetalhes = () => {
    return (
        <section className="border-mediumgray pt-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden single-product">
            <Container fluid>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" className="mx-0" defaultActiveKey={0}>
                            <Row className="mx-0 tab-style-04">
                                <Col lg={12} className="p-0 mx-0">
                                    <Nav fill navbarScroll className="justify-center uppercase font-serif font-medium text-center cursor-pointer border-b border-t border-solid border-mediumgray mb-36 md:mb-[52px] sm:mb-[46px] xs:mb-[35px]">
                                        <Nav.Item>
                                            <Nav.Link className="block text-darkgray border-b-[3px] border-solid border-transparent py-[30px] px-[40px] sm:px-[10px] mx-0 mb-0" eventKey={0} >Descrição</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="block text-darkgray border-b-[3px] border-solid border-transparent py-[30px] px-[40px] sm:px-[10px] mx-0 mb-0" eventKey={1} >Especificações</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="block text-darkgray border-b-[3px] border-solid border-transparent py-[30px] px-[40px] sm:px-[10px] mx-0 mb-0" eventKey={2} >Avaliações</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg={12} className="p-0">
                                    <Container>
                                        <Col>
                                            <Tab.Content>
                                                <Tab.Pane eventKey={0} >
                                                    <Row className="items-center">
                                                        <Col xl={5} lg={6} className="md:mb-[0px]">
                                                            <p className="mb-[25px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the ‘s standard dummy text. Lorem ipsum has been the industry’s standard dummy text ever since. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <Lists theme="list-style-04" data={ListData} animation={fadeIn} />
                                                        </Col>
                                                        <Col lg={6} xl={{ offset: 1 }}>
                                                            <img loading="lazy" className='mt-[-20px]' width="464" height="464" src="/assets/img/produto.gif" alt="produto" />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey={1}>
                                                    <Row className="tems-center">
                                                        <Col>
                                                            <table className="w-full">
                                                                <tbody>
                                                                    <tr className="border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                                                        <th className="text-darkgray font-medium w-[150px] px-[15px]">Color</th>
                                                                        <td className="py-[10px] px-[15px]">Black, Blue, Brown, Red, Silver</td>
                                                                    </tr>
                                                                    <tr className="bg-lightgray border-b border-[#e8e8e8] py-[10px] px-[15px]">
                                                                        <th className="text-darkgray font-medium w-[150px] px-[15px]">Size</th>
                                                                        <td className="py-[10px] px-[15px]">L, M, S, XL</td>
                                                                    </tr>
                                                                    <tr className="border-b border-[#e8e8e8] ">
                                                                        <th className="text-darkgray font-medium w-[150px] px-[15px]">Style/Type</th>
                                                                        <td className="py-[10px] px-[15px]">Sports, Formal</td>
                                                                    </tr>
                                                                    <tr className="bg-lightgray border-b border-[#e8e8e8] ">
                                                                        <th className="text-darkgray font-medium w-[150px] px-[15px]">Lining</th>
                                                                        <td className="py-[10px] px-[15px]">100% polyester taffeta with a DWR finish</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-darkgray font-medium w-[150px] px-[15px]">Material</th>
                                                                        <td className="py-[10px] px-[15px]">Lather, Cotton, Silk</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey={2}>
                                                    <Row className="justify-center mb-[5.5rem]">
                                                        <Col xs={12} lg={10}>
                                                            <div className="flex w-full md:items-start sm:block">
                                                                <div className="w-[75px] sm:w-[50px] sm:mb-[10px]">
                                                                    <img src="https://via.placeholder.com/125x125" width="" height="" className="rounded-full w-[95%] sm:w-full" alt="" />
                                                                </div>
                                                                <div className="w-full pl-[25px] sm:pl-0">
                                                                    <Link href="/shop/single-product" aria-label='button' className="text-darkgray hover:text-fastblue font-serif font-medium text-md">Herman Miller</Link>
                                                                    <span className="text-[#fd961e] text-xs float-end tracking-[2px]">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </span>
                                                                    <div className="text-md text-spanishgray mb-[15px]">17 July 2020, 6:05 PM</div>
                                                                    <p className="w-[85%]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row className="justify-center">
                                                        <Col lg={10} className="mb-16">
                                                            <h6 className="font-serif text-darkgray font-medium mb-[5px]">Add a review</h6>
                                                            <div className="mb-[5px]">Your email address will not be published. Required fields are marked
                                                                <span className="text-[#fb4f58]">*</span></div>
                                                        </Col>
                                                    </Row>
                                                    <Row className="justify-center">
                                                        <Col lg={10}>
                                                            <Formik
                                                                initialValues={{ name: '', email: '' }}
                                                                validationSchema={ContactFormStyle02Schema}
                                                                onSubmit={async (values, actions) => {
                                                                    await new Promise((r) => setTimeout(r, 500));
                                                                    resetForm(actions)
                                                                }}>
                                                                {({ isSubmitting, status }) => (
                                                                    <Form className="row mb-[30px]">
                                                                        <Col md={6} sm={12} xs={12}>
                                                                            <Input showErrorMsg={false} label={<span className="inline-block mb-[15px]">Your name <span className="text-[#fb4f58]">*</span> </span>} type="text" name="name" labelClass="mb-[25px]" className="rounded-[5px] py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="Enter your name" />
                                                                        </Col>
                                                                        <Col md={6} sm={12} xs={12}>
                                                                            <Input showErrorMsg={false} label={<span className="inline-block mb-[15px]">Your email address <span className="text-[#fb4f58]">*</span> </span>} type="email" name="email" labelClass="mb-[25px]" className="rounded-[5px] py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="Enter your email" />
                                                                        </Col>
                                                                        <Col sm={12} xs={12} className="mb-[30px]">
                                                                            <label className="mb-[15px]">Your rating <span className="text-[#fb4f58]">*</span></label>
                                                                            <span className="text-[#fd961e] text-xs block">
                                                                                <i className="far fa-star"></i>
                                                                                <i className="far fa-star"></i>
                                                                                <i className="far fa-star"></i>
                                                                                <i className="far fa-star"></i>
                                                                                <i className="far fa-star"></i>
                                                                            </span>
                                                                        </Col>
                                                                        <Col md={12} sm={12} xs={12}>
                                                                            <label className="mb-[15px]">Your comment</label>
                                                                            <textarea className="mb-[2.5rem] rounded-[4px] py-[15px] px-[20px] h-[120px] w-full bg-transparent border border-[#dfdfdf] text-md resize-none" rows="6" name="comment" placeholder="Enter your comment"></textarea>
                                                                        </Col>
                                                                        <Col>
                                                                            <Buttons type="submit" className={`tracking-[0.5px] btn-fill rounded-[2px] font-medium uppercase${isSubmitting ? " loading" : ""}`} themeColor="#232323" size="md" color="#fff" title="submit" />
                                                                        </Col>
                                                                        <AnimatePresence>
                                                                            {status && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] text-center py-[10px]" theme="message-box01" variant="success" message="Your message has been sent successfully!" /></m.div>}
                                                                        </AnimatePresence>
                                                                    </Form>
                                                                )}
                                                            </Formik>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Container>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProdutoTabDetalhes;