import React, { memo, useState } from 'react'

// Libraries
import { motion } from "framer-motion"

import "../../../Assets/scss//components/_accordion.scss"
import { Accordion, AccordionDetails, AccordionSummary, Icon, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';


const ListaExpansivel = (props) => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={`${props.theme} ${props.themeColor}${props.className ? ` ${props.className}` : ""}`}>
            <div>
                {
                    props.data.map((item, key) => {
                        return (
                            <motion.div className={`accordion-item-wrapper`}
                                key={key}
                            >
                                <Accordion className='mt-3 mb-3' elevation={0} expanded={expanded === key} disableGutters={false} onChange={handleChange(key)}>
                                    {item.title && 
                                        <AccordionSummary expandIcon={<ExpandMore />}>
                                            { item.time && <span className="panel-time">{item.time}</span>}
                                            { item.title && <span className="panel-title text-[18px]">{item.title}</span>}
                                            { item.author && <span className="panel-speaker">{item.author}</span>}
                                        </AccordionSummary>
                                    }
                                    {item.content && <AccordionDetails className='pt-4 text-md'> {item.content} </AccordionDetails>}
                                </Accordion>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default memo(ListaExpansivel)