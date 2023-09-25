import React, { memo } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Grid } from '@mui/material';

const ListaItemClean = (props) => {
  const style = { "--overlay-color": typeof (props.overlay) === "object" ? `linear-gradient(to right top, ${props.overlay.map((item, i) => item)})` : props.overlay }

    return (
        <Grid container spacing={2} className={`blog-clean text-center justify-center mt-18 md:mt-[2.5rem] sm:mt-8`}>
            {props.data.map((item, i) => {
            return (
                <Grid item sm={12} xs={12} md={4} lg={4} className='w-[90%] mt-6 mb-4' key={i} >
                    <motion.div 
                        className="blog-post rounded-[6px] mt-6 " 
                        style={style}
                        initial={{ opacity: 0 }}
                        whileInView={!false && { opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }} >

                        <div className="blog-post-img relative overflow-hidden" style={style}>
                                <img className="w-full" height={280} width={350} src={item.img} alt="blog-clean" />
                                
                        </div>
                        
                        <div className="p-[30px] sm:px-[25px] bg-white">
                            <span className="text-md font-semibold text-darkgray uppercase"> {item.date} </span>
                            <a aria-label="link" className="font-medium text-gray-600 font-serif block" > {item.title} </a>
                        </div>
                        
                    </motion.div>
                </Grid>
            );
            })}
        </Grid>
    )
};

export default memo(ListaItemClean);