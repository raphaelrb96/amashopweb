import React, { memo } from 'react'

// Libraries
import { Button } from 'react-bootstrap';

import "../../..//Assets/scss/components/_button.scss"
import { useTheme } from '@mui/material';



// css

const Buttons = (props) => {

  const theme = useTheme();

  const borderColor = props.themeColor === theme.palette.primary.main ? 'border-green-400' : 'border-gray-300';

  const color1 = props.themeColor && props.themeColor[0];
  const color2 = props.themeColor && props.themeColor[1];
  const textcolor1 = props.color && props.color[0];
  const textcolor2 = props.color && props.color[1];
  const style = {
    "--gradient-color": typeof (props.themeColor) === "object" ? `linear-gradient(45deg, ${color1}, ${color2}, ${color1})` : props.themeColor,
    "--brand-color": typeof (props.themeColor) === "object" ? `linear-gradient(to right, ${color1}, ${color2}, ${color1})` : props.themeColor,
    "--text-color": typeof (props.color) === "object" ? `linear-gradient(to right, ${textcolor1}, ${textcolor2}, ${textcolor1})` : props.color,
  }
  return (
    (props.href || props.type === "submit") ? (
      <Button
        as={props.href ? "a" : (props.type === "submit" ? "button" : "a")}
        type={props.type === "submit" ? "submit" : undefined}
        style={style}
        className={`border-[2px] btn-${props.size}${props.className ? ' ' + props.className : ''}${typeof (props.themeColor) === "object" ? " btn-gradient" : ""}${typeof (props.color) === "object" ? " text-gradient" : ""}`}
        href={props.href}
        onClick={props.onClick}
        disabled={props.disabled}
        variant="secondary"
        aria-label={props.ariaLabel}
        target={props.target}
        color={props.btnColor}
      >
        <ButtonInner {...props} />
      </Button>
    ) : (
      <a
        style={style}
        target={props.target}
        className={`btn cursor-pointer border-[2px] hover:${borderColor} text-xlg text-[${props.color}] hover:text-[${props.themeColor}] font-bold flex items-center justify-center content-center rounded-[25px] btn-${props.size}${props.className ? ' ' + props.className : ''}${typeof (props.themeColor) === "object" ? " btn-gradient" : ""}${typeof (props.color) === "object" ? " text-gradient" : ""} `}
        to={props.to ? props.to : "#"}
        onClick={props.onClick}
        color={props.btnColor}
        aria-label={props.ariaLabel}>
        <ButtonInner {...props} />
      </a>
    )
  )
}

const ButtonInner = (props) => {
  return (
    <>
      {(props.icon && props.iconPosition !== "after") && <i className={`${props.icon} text-[30px] pr-3 left-icon`}></i>}
      {props.title}

      {(props.icon && props.iconPosition === "after") && <i className={`${props.icon} text-[30px] pr-3 right-icon`}></i>}
      {(props.theme === "btn-link-gradient") && <span></span>}
    </>
  )
}

export default memo(Buttons)