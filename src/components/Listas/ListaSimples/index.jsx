import React, { memo } from 'react'
import { motion } from 'framer-motion';

const ListaSimples = (props) => {
    return (
        <ul className={`${props.className ? ` ${props.className}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <motion.li className={props.theme} key={i}  {...{ ...props.animation, transition: { delay: (i+1) * props.animationDelay, initial: { opacity: 0, x: "100%" }, ease: [0.25, 1, 0.5, 1], duration: 1.2 } }}>
                            {item.icon && <i className={item.icon} style={{color: '#f5f5f5'}}></i>}
                            {item.linkTitle && <a aria-label="list" href={item.link} >{item.linkTitle}</a>}
                            {item.title ?
                                <div className='block'>
                                    {item.title && <span className='block list-title'>{item.title}</span>}
                                    <span className='list-content'>{item.content}</span>
                                </div> : (
                                    <span>{item.content}</span>
                                )}
                            {item.number && <span className='list-number'>{item.number}</span>}
                        </motion.li>
                    )
                })
            }
        </ul>
    )
};

export default memo(ListaSimples);