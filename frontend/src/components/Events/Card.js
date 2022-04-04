import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Card.scss";

export default function Card({ children,event, showEvent, dataImage }) {
  const card = useRef(null);

  const [data, setData] = useState({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  });

  useEffect(() => {
    setData({
      ...data,
      width: card.current.offsetWidth,
      height: card.current.offsetHeight,
    });
  }, []);

  const mousePX = () => {
    return data.mouseX / data.width;
  };

  const mousePY = () => {
    return data.mouseY / data.height;
  };

  const cardStyle = () => {
    const rX = mousePX() * 30;
    const rY = mousePY() * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
    };
  };

  const cardBgTransform = () => {
    const tX = mousePX() * -40;
    const tY = mousePY() * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  };

  const cardBgImage = () => {
    return {
      backgroundImage: `url(${dataImage})`,
    };
  };

  const handleMouseMove = (e) => {
    setData({
      ...data,
      mouseX: e.pageX - card.current.offsetLeft - data.width / 2,
      mouseY: e.pageY - card.current.offsetTop - data.height / 2,
    });
  };

  const handleMouseEnter = () => {
    clearTimeout(data.mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setData({
      ...data,
      mouseLeaveDelay: setTimeout(() => {
        setData({
          ...data,
          mouseX: 0,
          mouseY: 0,
        });
      }, 1000),
    });
  };

  return (
    <motion.div
      className="card-wrap"
      onClick={() => showEvent(event)}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={card}
    >
      <div className="card" style={{ ...cardStyle() }}>
        <div
          className="card-bg"
          style={{ ...cardBgTransform(), ...cardBgImage() }}
        ></div>
        <div className="card-info">{children}</div>
      </div>
    </motion.div>
  );
}
