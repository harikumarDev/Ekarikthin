import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Sponsors.css";
import "./Sponsors-queries.css";
import Glitch from "../../../Global/Glitch/Glitch";

const sponsers = [
  {
    name: "Madras Hotel",
    image: "/sponsers/madras.webp",
  },
  {
    name: "Spicy Corner",
    image: "/sponsers/spicy.webp",
  },
  {
    name: "YODI'S",
    image: "/sponsers/yodi.webp",
  },
  {
    name: "Jack'n Jill",
    image: "/sponsers/jacknjill.webp",
  },
  {
    name: "Familiar Trading",
    image: "/sponsers/familiar.webp",
  },
  {
    name: "Delicious",
    image: "/sponsers/delicious.webp",
  },
];

export default function Sponsors() {
  return (
    <>
      <section className="Sponsors-section" id="Sponsors-section">
        <h2 className="Sponsors-heading u-colorful-text-2">
          <Glitch value={"OUR SPONSORS FOR EKARIKTHI'22"}></Glitch>
        </h2>
        <div className="Sponsors clearfix">
          {sponsers.map((sponser, ind) => (
            <div className="Sponsor" key={ind}>
              <img src={sponser.image} alt={sponser.name} height="70%" />
              <div className="Sponsor-info">
                <h3>{sponser.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
