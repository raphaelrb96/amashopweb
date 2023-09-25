import React, { memo } from 'react'
import { motion } from 'framer-motion'
import "../../../../Assets/scss/components/_processstep.scss"
import { Grid } from '@mui/material'

const PassoAPassoUm = (props) => {
    return (
        <Grid container className={`flex ${props.grid ? props.grid : ""}${props.className ? ` ${props.className}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <Grid item key={i} xs={12} md={6} lg={3}>
                            <motion.div  className={`${props.theme} process-step`} >
                                <div className='process-step-icon-box'>
                                    <span className='process-step-bfr'></span>
                                    {item.icon && <div className="process-step-icon"><i className={item.icon}></i></div>}
                                    {props.theme !== "process-step-style-01" && <span className="process-step-number"><span>{i + 1}</span></span>}
                                    {(item.title || item.content) && (
                                        <div className="process-step-description">
                                            {item.title && <span className="process-step-heading">{item.title}</span>}
                                            {item.content && <p className="process-step-content font-semibold text-gray-800 mb-16">{item.content}</p>}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}



export default memo(PassoAPassoUm)