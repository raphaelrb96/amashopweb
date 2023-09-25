"use client"

import { Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"


const ListaIconeTexto = (props) => {
  const {xs, sm, md, lg, xl} = props;
  return (
    <Grid 
      container 
      spacing={2} 
      alignItems={'center'} 
      justifyContent={'center'}
      alignContent={'center'}
      className={`${props.grid} `}
    >
      {
        props.data.map((item, i) => {
          return (
            <Grid item key={i} xs={xs ? xs : 12} sm={sm ? sm : 12} md={md ? md : 6} lg={lg ? lg : 4} xl={xl ? xl : 4} className={`${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`}>
              <div className="rounded-md justify-center content-center w-full">
                {
                  item.img ? (
                    <img height={42} width={51} className="inline-block items-center justify-center mb-[30px]" src={item.img} alt="featurebox" />
                  )
                    :
                    item.icon ? (props.theme === "icon-with-text-05" ? <Link aria-label="link for icon" to="#"><i className={item.icon}></i></Link> : <i className={item.icon}></i>
                    )
                      :
                      item.textIcon ? (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                        :
                        <span className="text-basecolor inline-block icon-text">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                }

                <div className='feature-box-content'>
                  {item.title && <h6 className="font-medium text-[18px]">{item.title}</h6>}
                  {item.content && <p>{item.content}</p>}
                  {props.theme === "icon-with-text-11" ? <Buttons ariaLabel="iconwithtext" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]" size="xl" color="#232323" title="Read more" /> : ""}
                </div>
                {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" href={item.link} title={item.linkTitle} />}
              </div>
            </Grid>
          )
        })
      }
    </Grid>
  )
}


export default memo(ListaIconeTexto)