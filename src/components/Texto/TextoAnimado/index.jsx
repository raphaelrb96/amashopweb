import React, { useEffect, useState, useRef } from "react";

// Libraries
import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

// css
import "../../../Assets/scss/components/_textAnime.scss"

export const TiltBox = (props) => {
  return (
    <motion.div className="justify-center">
      <Atropos
        highlight={false}
        stretchX={0}
        stretchY={0}
        rotateTouch={false}
        className={`my-atropos ${props.className} w-full`}
      >
        {props.children}
      </Atropos>
    </motion.div>
  );
};

export const TextoAnimado = (props) => {
  const wordwrapper = useRef(null);
  const [index, setIndex] = useState(0);
  const [maxLength, setMaxLength] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const textEls = useRef({})
  const style = {
    "--text-color": typeof (props.color) === "object" ? `linear-gradient(to right, ${props.color.map(item => item)})` : props.color,
    "--line-color":typeof (props.lineColor) === "object" ? `linear-gradient(to right, ${props.lineColor.map(item => item)})` : props.lineColor,
  }

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => {
          if (index !== props.data.length - 1) {
            return index + 1;
          } else {
            return 0;
          }
        })
      }, props.duration
    );
    return () => clearTimeout(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let maxWidth = 0,
        maxheight = 0;
    setTimeout(() => {
      let cdWrapper = wordwrapper.current.querySelectorAll(".cd-words-wrapper > .cd-text");
      cdWrapper.forEach(function (item) {
        maxWidth = item.clientWidth > maxWidth ? item.clientWidth : maxWidth;
        maxheight = item.clientHeight > maxheight ? item.clientHeight : maxheight;
      })
      setMaxLength(maxWidth+10)
      setMaxHeight(maxheight)
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <motion.div
      initial={{ width: "auto" }}
      animate={{ width: maxLength, height: maxHeight }}
      ref={wordwrapper}
      className={`cd-words-wrapper${index ? " is-loading" : ""}${props.animation ? ` ${props.animation}` : ""}${props.className ? ` ${props.className}` : ""}`}
      style={style}
    >
      {props.data.map((item, i) => {
        return (
          <span
            key={i}
            className={`cd-text${index === i ? " is-visible" : " is-hidden"}`}
            ref={el => textEls.current[i] = el}
          >
            {props.animation === "type" || props.animation === "flip"
              ? item.split("").map((el, j) => {
                return (
                  <i key={j} className={index === i ? "in" : "out"} style={{ transitionDelay: `${(props.charSpeed / item.split("").length) / 2000 * j}s` }}>
                    {el}
                  </i>
                );
              })
              : item}
          </span>
        );
      })}
    </motion.div>
  );
};
