import React, { memo } from 'react'

// Libraries
import { m } from 'framer-motion'
import { PropTypes } from "prop-types";

// Data
import { InteractiveBannersData01 } from '../../../functions/examples';
import { Grid, Link, Container } from '@mui/material';

const InBannerUm = (props) => {

    const clasGridCotainner =  `
        ${props.grid}
        ${props.className ? ` ${props.className}` : ""}
        g-0 
    `;

    const classGridItem = `
        interactivebanners-style-01  
        border-y 
        border-r 
        border-mediumgray
        relative
        z-0 
        overflow-hidden
    `;
    
    return (
        <div  className="flex ">
            <Grid container className={clasGridCotainner}>
                {
                    props.data.map((item, i) => {
                        return (
                            <Grid item xs={12} md={6} lg={3} xl={3} key={i} className={classGridItem}>
                                
                                <m.div className="py-24  px-[5.5rem] xl:px-16 xl:py-16 lg:px-[6.5rem] lg:py-24" {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}>
                                    {item.subtitle && <span className="block font-serif text-md text-zinc-800  tracking-[2px] mb-[25px] font-semibold uppercase">{item.subtitle}</span>}
                                    {item.title && <h3 className="heading-6 font-semibold w-[70%] mb-[20px] xl:w-full"> {item.title}</h3>}
                                    {(item.icon || item.btnLink) && <Link aria-label="link" className="no-underline text-[#2e2e2e] text-[40px]" to={item.btnLink ? item.btnLink : "#"}><i className={item.icon}></i></Link>}
                                    {item.img && <div className="interactive-banners-image bg-no-repeat bg-cover overflow-hidden bg-center absolute" style={{ backgroundImage: `url(${item.img})` }}></div>}
                                    <div className="interactive-banners-image bg-no-repeat bg-slate-900 bg-opacity-75 bg-cover overflow-hidden bg-center absolute" ></div>

                                </m.div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>


    )
}

InBannerUm.defaultProps = {
    data: InteractiveBannersData01,
    animationDelay: 0.2
}

InBannerUm.propTypes = {
    grid: PropTypes.string,
    className: PropTypes.string,
    animationDelay: PropTypes.number,
    animation: PropTypes.object,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            btnLink: PropTypes.string,
            img: PropTypes.string,
            subtitle: PropTypes.string,
            icon: PropTypes.string,
        })
    )
}

export default memo(InBannerUm)