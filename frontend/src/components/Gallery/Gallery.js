import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animation } from "../../utils/Animation";
import { CircularProgress } from "@mui/material";
import Img from "react-cloudinary-lazy-image";
import axios from "axios";

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
      <Img
        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
        fluid={{
          maxWidth: 300,
        }}
        imageName={item.public_id}
      />
    </motion.div>
  );
}

export default function Gallery() {
  const [model, setModel] = useState(false);
  // eslint-disable-next-line
  const [image, setImage] = useState({});
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  const getImg = (img) => {
    // Removing model for now
    return;
    // setImage(img);
    // setModel(true);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await axios.get("/api/gallery");
      setImages(data.images);
      setLoading(false);
    };

    fetchImages();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="gallery-main">
      <h1>Our MEMORIES</h1>
      <div className={model ? "model open" : "model"}>
        <Img
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          fluid={{
            maxWidth: 300,
          }}
          imageName={image.public_id}
        />
        <AiOutlineClose
          onClick={() => setModel(false)}
          className="close-icon"
        />
      </div>
      <div className="gallery">
        {!loading ? (
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
