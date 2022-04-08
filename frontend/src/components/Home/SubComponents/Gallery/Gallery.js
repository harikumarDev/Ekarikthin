import React from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Img from "react-cloudinary-lazy-image";
import "../../Home.css";
import "../../queries.css";
import "./Gallery.css";
import "./Gallery-queries.css";

export default function Gallery({ images }) {
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
                        <Img
                          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                          fluid={{
                            maxWidth: 300,
                            height: 250,
                          }}
                          imageName={image.public_id}
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
