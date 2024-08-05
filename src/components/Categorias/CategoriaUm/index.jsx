import React, { useState, useEffect, useRef, memo } from 'react'

// Libraries
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Grid } from '@mui/material';

// Data
const onlyCategoriesData = [
    {
        img: "/assets/img/baners/salao_1.jpeg",
        title: "Salão e beleza",
        link: "/?categoria=16",
        id: 16
    },
    {
        img: "/assets/img/baners/cozinha_1.jpeg",
        title: "Cozinha e Panelas",
        link: "/?categoria=11",
        id: 11
    },
    {
        img: "/assets/img/baners/toys_1.jpeg",
        title: "Brinquedos",
        link: "/?categoria=9",
        id: 9
    },
    {
        img: "/assets/img/baners/som_1.jpeg",
        title: "Som e Audio",
        link: "/?categoria=7",
        id: 7
    },
    {
        img: "/assets/img/baners/cell_1.jpeg",
        title: "Celular e Acess",
        link: "/?categoria=1",
        id: 1
    },
    {
        img: "/assets/img/baners/computador_1.jpeg",
        title: "Informatica",
        link: "/?categoria=2",
        id: 2
    },
    {
        img: "/assets/img/baners/fone_2.jpeg",
        title: "Fones de Ouvido",
        link: "/?categoria=0",
        id: 0
    },
    {
        img: "/assets/img/baners/relogios_1.jpeg",
        title: "Relogios e Acess",
        link: "/?categoria=6",
        id: 6
    },
];

const CategoriaUm = (props) => {
    const overlay = ["#2beb1dcc", "#55e45fcc", "#fff"];
    const style = { "--overlay-color": typeof (overlay) === "object" ? `linear-gradient(to right top, ${overlay.map((item, i) => item)})` : overlay }
    const blogWrapper = useRef();
    const { navCateg } = props;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // import("../../Functions/Utilities").then(module => {
        //     const grid = module.initializeIsotop(blogWrapper.current)
        //     grid.on('arrangeComplete', () => setLoading(false));
        // })
    }, []);

    return (
        <Grid justifyContent="center" alignItems="center" alignContent="center" container spacing={2} className='pb-[2%]' ref={blogWrapper} >
            {
                (props.data || onlyCategoriesData).map((item, i) => {
                    return (
                        <Grid item xs={11} sm={6} md={3} justifyContent="center" alignItems="center" alignContent="center" key={i} style={style}>
                            <a aria-label="link" onClick={() => navCateg(item.id)}>
                                <div
                                    initial={{ opacity: 0 }}
                                    whileInView={!loading && { opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="shop-product relative overflow-hidden rounded-xl mt-6">
                                    <div className="shop-product-image relative  h-[400px]">
                                        {item.title && <div className="absolute top-0 left-0 w-full h-full shop-hover"></div>}
                                        <a aria-label="link" onClick={() => navCateg(item.id)}>
                                            {item.img && <img width={400} height={584} src={item.img} className="w-full h-full align-middle object-cover" alt="" />}
                                        </a>
                                    </div>
                                    {
                                        item.title &&
                                        <div className="shop-product-content flex items-center bg-[#fff] px-[16px] py-[5px] absolute bottom-[25px] left-0 right-0 transition-default rounded-[4px] w-[calc(100%-50px)] mx-auto">
                                            <a aria-label="onlycategories" className="flex-1 xs:text-center sm:text-center font-semibold text-darkgray leading-[18px] inline-block align-middle uppercase me-auto">{item.title}</a>
                                            <a className='xs:hidden sm:hidden' aria-label="onlycategories"><i className="line-icon-Arrow-OutRight  text-darkgray text-[50px] align-middle ml-[15px]"></i></a>
                                        </div>
                                    }
                                </div>
                            </a>

                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default memo(CategoriaUm)

