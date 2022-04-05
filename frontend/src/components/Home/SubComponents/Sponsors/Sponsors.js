import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Sponsors.css";
import "./Sponsors-queries.css";
import Glitch from "../../../Global/Glitch/Glitch";

const sponsers = [
  {
    name: "Google",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    services: "1600+ services",
    locations: "60+ locations",
    link: "https://twitter.com/google",
  },
  {
    name: "Facebook",
    image: "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg",
    services: "1600+ services",
    locations: "60+ locations",
    link: "https://twitter.com/facebook",
  },
  {
    name: "Microsoft",
    image:
      "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_960_720.png",
    services: "1600+ services",
    locations: "60+ locations",
    link: "https://twitter.com/microsoft",
  },
  {
    name: "Amazon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    services: "1600+ services",
    locations: "60+ locations",
    link: "https://twitter.com/amazon",
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
              <img src={sponser.image} alt={sponser.name} height="40%" />
              <div className="Sponsor-info">
                <h3>{sponser.name}</h3>
                <ul className="Sponsor-ul">
                  <li>
                    <ion-icon name="happy-outline"></ion-icon>
                    {sponser.services}
                  </li>
                  <li>
                    <ion-icon name="fast-food-outline"></ion-icon>
                    {sponser.locations}
                  </li>
                  <li>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <a href={sponser.link}>{sponser.name}</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
