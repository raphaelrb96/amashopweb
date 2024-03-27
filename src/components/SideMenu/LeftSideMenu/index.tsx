import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";
import { m } from 'framer-motion';
import { Link } from '@mui/material';
import { fadeIn } from '../../../functions/GlobalAnimations';

const LeftSideMenu = () => {
    return (
        <section className="shopping-right-left-sidebar px-5 pt-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
            <div className="col shopping-sidebar inline-block order-md-1 order-2" {...fadeIn}>
                <div className="border-b border-mediumgray pb-12 mb-12 relative">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[20px]">
                        Filtrar por Categoria
                    </span>
                    <ul className="list-style filter-category">
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#shirt"><span className="product-cb product-category-cb"></span>Casual shirts</a><span className="item-qty">25</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#bags"><span className="product-cb product-category-cb"></span>Leather bags</a><span className="item-qty">05</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#shirt"><span className="product-cb product-category-cb"></span>Men's shorts</a><span className="item-qty">36</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#t-shirt"><span className="product-cb product-category-cb"></span>Polo t-shirts</a><span className="item-qty">05</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#skirts"><span className="product-cb product-category-cb"></span>Short skirts</a><span className="item-qty">09</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} href="#jacket"><span className="product-cb product-category-cb"></span>Winter jackets</a><span className="item-qty">12</span></li>
                    </ul>
                </div>
                <div className="border-b border-mediumgray pb-12 mb-12 relative">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[20px]">Filtrar por Lojas</span>
                    <ul className="list-style filter-color">
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#black"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#363636" }}></span>Carbon black</a><span className="item-qty">25</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#blue"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#657fa8" }}></span>Prussian blue</a><span className="item-qty">03</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#brown"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#936f5e" }}></span>Light brown</a><span className="item-qty">15</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#green"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#97a27f" }}></span>Parrot green</a><span className="item-qty">40</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#orange"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#b95b5b" }}></span>Dark orange</a><span className="item-qty">29</span></li>
                        <li><a aria-label="product-category" rel="noreferrer" onClick={(e) => e.preventDefault()} target="_blank" href="#blue"><span className="product-cb paroduct-color-cb" style={{ backgroundColor: "#b7b5b5" }}></span>Slate blue</a><span className="item-qty">35</span></li>
                    </ul>
                </div>
                <div className="border-b border-mediumgray pb-12 mb-12">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[26px]">Filtrar por Preço</span>
                    {/* <MultiRangeSlider
                    min={0}
                    max={4000}
                    onChange={({ min, max }) => (`min = ${min}, max = ${max}`)}
                /> */}
                </div>
                <div className="border-b border-mediumgray pb-12 mb-12 relative">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[26px]">Filtrar por Avaliação</span>
                    <div>
                        <div className="flex items-center justify-between mb-[20px]">
                            <div className="star-rating block">
                                <span style={{ width: "100%" }} ></span>
                            </div>
                            <span className="text-md text-end">19</span>
                        </div>
                        <div className="flex items-center justify-between mb-[20px]">
                            <div className="star-rating block">
                                <span style={{ width: "80%" }} ></span>
                            </div>
                            <span className="text-md text-end">08</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="star-rating block">
                                <span style={{ width: "60%" }} ></span>
                            </div>
                            <span className="text-md text-end">06</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[30px]">Filtrar por Palavra Chave</span>
                    <div className="tag-cloud d-inline-block margin-10px-top">
                        <Link aria-label="product-tags-link" href="#">Coats</Link>
                        <Link aria-label="product-tags-link" href="#">Cotton</Link>
                        <Link aria-label="product-tags-link" href="#">Dresses</Link>
                        <Link aria-label="product-tags-link" href="#">Jackets</Link>
                        <Link aria-label="product-tags-link" href="#">Polyester</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeftSideMenu;