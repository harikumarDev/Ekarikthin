import React from "react";
import { Link } from "react-router-dom";
import Img from "react-cloudinary-lazy-image";
import "../../Home.css";
import "../../queries.css";
import "./Gallery.css";
import "./Gallery-queries.css";

const homeImages = [
  {
    id: 1,
    src: "Home_EK/1_db7oz8",
    alt: "Demon",
  },
  {
    id: 2,
    src: "Home_EK/2_s4e5sj",
    alt: "Band",
  },
  {
    id: 3,
    src: "Home_EK/3_y4hjtj",
    alt: "Speech",
  },
  {
    id: 4,
    src: "Home_EK/4_bqesaa",
    alt: "Girl",
  },
  {
    id: 5,
    src: "Home_EK/5_slifuz",
    alt: "Guitar",
  },
  {
    id: 6,
    src: "Home_EK/6_nsatca",
    alt: "Image",
  },
  {
    id: 7,
    src: "Home_EK/7_kqtdef",
    alt: "DJ",
  },
  {
    id: 8,
    src: "Home_EK/8_mnqixo",
    alt: "Image ",
  },
];

export default function Gallery() {
  return (
    <>
      <section className="Gallery-section" id="Gallery-section">
        <div className="Gallery-img-wrapper" id="Gallery-img-wrapper">
          <ul>
            {homeImages.map((image, ind) => (
              <li key={ind} id={`Gallery-li-${image.id}`}>
                <figure className="Gallery-figure">
                  <Link to="/gallery">
                    {/* <img src={image.src} alt={image.alt} height="300px" /> */}
                    <Img
                      cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                      fluid={{
                        maxWidth: 300,
                        height: 250,
                      }}
                      imageName={image.src}
                    />
                  </Link>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
