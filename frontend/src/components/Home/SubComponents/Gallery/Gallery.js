import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Gallery.css";
import "./Gallery-queries.css";
import { Link } from "react-router-dom";
import Image1 from "../../../../images/HomeImages/1.jpg";
import Image2 from "../../../../images/HomeImages/2.jpg";
import Image3 from "../../../../images/HomeImages/3.jpg";
import Image4 from "../../../../images/HomeImages/4.jpg";
import Image5 from "../../../../images/HomeImages/5.jpg";
import Image6 from "../../../../images/HomeImages/6.jpg";
import Image7 from "../../../../images/HomeImages/7.jpg";
import Image8 from "../../../../images/HomeImages/8.jpg";

const homeImages = [
  {
    id: 1,
    src: Image1,
    alt: "Demon",
  },
  {
    id: 2,
    src: Image2,
    alt: "Band",
  },
  {
    id: 3,
    src: Image3,
    alt: "Speech",
  },
  {
    id: 4,
    src: Image4,
    alt: "Girl",
  },
  {
    id: 5,
    src: Image5,
    alt: "Guitar",
  },
  {
    id: 6,
    src: Image6,
    alt: "Image",
  },
  {
    id: 7,
    src: Image7,
    alt: "DJ",
  },
  {
    id: 8,
    src: Image8,
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
                <figure className="Gallery-figure-1">
                  <Link to="/gallery">
                    <img src={image.src} alt={image.alt} height="300px" />
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
