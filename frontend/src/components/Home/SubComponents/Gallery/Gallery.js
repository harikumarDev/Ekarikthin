import React from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
// import Img from "react-cloudinary-lazy-image";
import "../../Home.css";
import "../../queries.css";
import "./Gallery.css";
import "./Gallery-queries.css";

const images = [
  {
    src: "/home/1.webp",
    alt: "DJ",
  },
  {
    src: "/home/2.webp",
    alt: "Butterfly",
  },
  {
    src: "/home/3.webp",
    alt: "Music",
  },
  {
    src: "/home/4.webp",
    alt: "Sword",
  },
  {
    src: "/home/5.webp",
    alt: "Angey girl",
  },
  {
    src: "/home/6.webp",
    alt: "Umbrella Girl",
  },
  {
    src: "/home/7.webp",
    alt: "Speech",
  },
  {
    src: "/home/8.webp",
    alt: "Singer",
  },
];

export default function Gallery() {
  return (
    <>
      <section className="Gallery-section" id="Gallery-section">
        <div className="Gallery-img-wrapper" id="Gallery-img-wrapper">
          <ul>
            {images ? (
              <>
                {images.map((image, ind) => (
                  <li key={ind} id={`Gallery-li-${ind + 1}`}>
                    <figure className="Gallery-figure">
                      <Link to="/gallery">
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={{ height: "350px" }}
                        />
                      </Link>
                    </figure>
                  </li>
                ))}
              </>
            ) : (
              <CircularProgress size={25} color="secondary" />
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
