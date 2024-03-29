import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";
import { m } from 'framer-motion';
import { Link } from '@mui/material';
import { fadeIn } from '../../../functions/GlobalAnimations';

interface PropFilter {
    id: string; 
    name: string; 
    type: number;
}
interface SideMenuProps {
    categorias: [];
    colecoes: [];
    filtrar: (list: [], id: string, name: string, type: number) => {};
    selected: PropFilter;
};

const LeftSideMenu = ({ categorias, colecoes, selected, filtrar }: SideMenuProps) => {

    const changeFilter = (list: [], id: string, name: string, type: number, e: any) => {
        e.preventDefault();
        filtrar(list, id, name, type);
    };

    return (
        <section className="shopping-right-left-sidebar px-5 pt-0 ">
            <div className="col shopping-sidebar inline-block order-md-1 order-2" {...fadeIn}>

                <div className="border-b border-mediumgray pb-12 mb-12 relative">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[20px]">
                        Filtrar por Categoria
                    </span>
                    <ul className="list-style filter-category">
                        {categorias.map(data => {
                            const { id, itens, name, recentes } = data;
                            const styleCheck = (selected.id === id && selected.type === 0) ? { backgroundColor: "#02A676" } : undefined;
                            return (
                                <li>
                                    <a aria-label="product-category" rel="noreferrer" onClick={(e) => changeFilter(recentes, id, name, 0, e)} href="#shirt">
                                        <span className="product-cb product-category-cb checked" style={styleCheck}></span>
                                        {name}
                                    </a>
                                    <span className="item-qty">
                                        {itens}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="border-b border-mediumgray pb-12 mb-4 relative">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[20px]">
                        Filtrar por Coleções
                    </span>
                    <ul className="list-style filter-category">
                        {colecoes.map(data => {
                            const { id, itens, name, recentes } = data;
                            const styleCheck = (selected.id === id && selected.type === 1) ? { backgroundColor: "#02A676" } : undefined;
                            return (
                                <li>
                                    <a aria-label="product-category" rel="noreferrer" onClick={(e) => changeFilter(recentes, id, name, 1, e)} href="#shirt">
                                        <span className="product-cb product-category-cb checked" style={styleCheck}></span>
                                        {name}
                                    </a>
                                    <span className="item-qty">
                                        {itens}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* 
                <div className="border-b border-mediumgray pb-12 mb-12">
                    <span className="shop-title relative font-serif font-medium text-darkgray block mb-[26px]">Filtrar por Preço</span>
                    <MultiRangeSlider
                        min={0}
                        max={4000}
                        onChange={({ min, max }) => (`min = ${min}, max = ${max}`)}
                    />
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
                */}

            </div>
        </section>
    );
}

export default LeftSideMenu;