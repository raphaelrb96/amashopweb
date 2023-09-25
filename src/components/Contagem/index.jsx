import React, { memo, useEffect } from "react";

// Libraries
import { motion } from "framer-motion";
import { Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import CountUp from "react-countup";


// css
import "../../Assets/scss/components/_counter.scss"

const Contagem = (props) => {
  useEffect(() => {
    let vertical_counters = document.querySelectorAll(".vertical-counter");
    let height = 0;
    vertical_counters.forEach(item => {
      height = item.querySelector("li").clientHeight;
      item.style.height = `${height}px`;
    });

    window.addEventListener('resize', () => {
      let vertical_counters = document.querySelectorAll(".vertical-counter");
      vertical_counters.forEach(item => {
        height = item.querySelector("li").clientHeight;
        item.style.height = `${height}px`;
      });
    })
  }, [])

  return (
    <Row className={props.grid}>
      {props.theme === "counter-style-02" || props.theme === "counter-style-03"
        ? props.data.map((item, i) => {
          let number = item.number.text && item.number.text.toString();
          let splitted_num = number && number.split("");
          return (
            <motion.div
              key={i}
              className={`${props.theme} ${props.className} relative`}
              {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}
            >
              <props.as className={`vertical-counter inline-flex overflow-hidden mb-0${item.number.class ? ` ${item.number.class}` : ""}`} >
                {splitted_num.map((item, i) => {
                  return (
                    <span key={i} className="vertical-counter-number font-serif" data-to={item}>
                      <motion.ul
                        className="p-0 font-semibold"
                        initial={{ y: 0 }}
                        whileInView={{ y: `-${item * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ ease: "linear", duration: props.duration }}
                      >
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                      </motion.ul>
                    </span>
                  );
                })}
              </props.as>
              {props.postfix_sign && (<span className="postfix_sign">{props.postfix_sign}</span>)}
              <div>
                <span className="counter-content">
                  {item.title && ( <span className="counter-title">{item.title}</span> )}
                  {item.content && item.content}
                </span>
              </div>
            </motion.div>
          );
        })
        : props.data.map((item, i) => {
          return (
            <motion.div
              key={i}
              className={`${props.theme} ${props.className} counter-col`}
              {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}
            >
              {item.number && (
                <props.as className={`counter-numbers${item.number.class ? ` ${item.number.class}` : ""}`}>
                  <CountUp start={0} end={item.number.text} duration={props.duration} easing={false}>
                    {({ countUpRef, start }) => ( <motion.span ref={countUpRef} whileInView={start} viewport={{ once: true }} /> )}
                  </CountUp>
                  {props.postfix_sign && <span className="postfix_sign">{props.postfix_sign}</span>}
                </props.as>
              )}
              {(item.title || item.content) && (
                <div className="counter-content-section">
                  {item.title && <span className="counter-heading">{item.title}</span>}
                  {item.content && <span className="counter-content">{item.content}</span>}
                </div>
              )}
            </motion.div>
          );
        })}
    </Row>
  )
};


export default memo(Contagem);