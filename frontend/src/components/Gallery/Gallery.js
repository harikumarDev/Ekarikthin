import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animation } from "../../utils/Animation";
import { data } from "../../utils/Images";
import { CircularProgress } from "@mui/material";

function ImageComp({ item, ind }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation(ind)}
    >
      <img src={item.src} alt={item.title} style={{ width: "100%" }} />
    </motion.div>
  );
}

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [image, setImage] = useState({});
  const [images, setImages] = useState(null);

  const getImg = (img) => {
    setImage(img);
    setModel(true);
  };

  useEffect(() => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    setImages(data);
  }, []);

  return (
    <div className="gallery-main">
      <h1>Our MEMORIES</h1>
      <div className={model ? "model open" : "model"}>
        <img src={image.src} alt={image.title} />
        <AiOutlineClose
          onClick={() => setModel(false)}
          className="close-icon"
        />
      </div>
      <div className="gallery">
        {images ? (
          <>
            {images.map((item, ind) => (
              <div key={ind} className="pics" onClick={() => getImg(item)}>
                <ImageComp item={item} ind={ind} />
              </div>
            ))}
          </>
        ) : (
          <CircularProgress size={25} color="secondary" />
        )}
      </div>
    </div>
  );
}
