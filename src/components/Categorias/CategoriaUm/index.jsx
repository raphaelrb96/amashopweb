import React, { useState, useEffect, useRef, memo } from 'react'

// Libraries
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Grid } from '@mui/material';

// Data
const onlyCategoriesData = [
    {
        img: "https://via.placeholder.com/1000x1000",
        title: "Woman leather bags",
        link: "/shop/shop-wide/",
        double_col: true,
    },
    {
        img: "https://via.placeholder.com/1000x1000",
        title: "Woman neckline",
        link: "/shop/shop-wide/",
        double_col: true
    },
    {
        img: "https://via.placeholder.com/800x800",
        title: "Woman bags",
        link: "/shop/shop-wide/",
    },
    {
        img: "https://via.placeholder.com/800x800",
        title: "Woman neckline",
        link: "/shop/shop-wide/",
    },
    {
        img: "https://via.placeholder.com/800x800",
        title: "Woman earrings",
        link: "/shop/shop-wide/",
    },
    {
        img: "https://via.placeholder.com/800x800",
        title: "Man sandals",
        link: "/shop/shop-wide/",
    },
    {
        img: "https://via.placeholder.com/1000x1000",
        title: "Woman neckline",
        link: "/shop/shop-wide/",
        double_col: true
    },
    {
        img: "https://via.placeholder.com/800x800",
        title: "Woman bags",
        link: "/shop/shop-wide/",
    },
];

const CategoriaUm = (props) => {
    const overlay = ["#2beb1dcc", "#55e45fcc", "#fff"];
    const style = { "--overlay-color": typeof (overlay) === "object" ? `linear-gradient(to right top, ${overlay.map((item, i) => item)})` : overlay }
    const blogWrapper = useRef();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // import("../../Functions/Utilities").then(module => {
        //     const grid = module.initializeIsotop(blogWrapper.current)
        //     grid.on('arrangeComplete', () => setLoading(false));
        // })
    }, [])
    return (
        <Grid justifyContent="center" alignItems="center" alignContent="center" container spacing={2} className='pb-[2%]' ref={blogWrapper} >
            {
                (props.data || onlyCategoriesData).map((item, i) => {
                    return (
                        <Grid item xs={6} md={3} justifyContent="center" alignItems="center" alignContent="center" key={i} style={style}>
                            <div
                                initial={{ opacity: 0 }}
                                whileInView={!loading && { opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="shop-product relative overflow-hidden mt-6">
                                <div className="shop-product-image relative  h-[400px]">
                                    {item.title && <div className="absolute top-0 left-0 w-full h-full shop-hover"></div>}
                                    <Link aria-label="link" href={item.link}>
                                        {item.img && <img width={400} height={584} src={item.img} className="w-full h-full align-middle object-cover" alt="" />}
                                    </Link>
                                </div>
                                {
                                    item.title && <div className="shop-product-content flex items-center bg-[#fff] px-[30px] py-[5px] absolute bottom-[25px] left-0 right-0 transition-default rounded-[4px] w-[calc(100%-50px)] mx-auto">
                                        <Link aria-label="onlycategories" href={item.link} className="font-serif flex-1 xs:text-center sm:text-center font-medium text-darkgray leading-[18px] inline-block align-middle uppercase me-auto">{item.title}</Link>
                                        <Link className='xs:hidden sm:hidden' aria-label="onlycategories" href={item.link}><i className="line-icon-Arrow-OutRight  text-darkgray text-[50px] align-middle ml-[15px]"></i></Link>
                                    </div>
                                }
                            </div>
                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default memo(CategoriaUm)

