import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Features.css";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import Glitch from "../../../Global/Glitch/Glitch";

const data = [
  {
    icon: "infinite-outline",
    heading: "BIGGEST TECHNO-CULTURAL FEST OF NAGALAND.",
    description:
      "lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit amet, con lorem3",
  },
  {
    icon: "alarm-outline",
    heading: "ANNUAL EVENT.",
    description:
      "lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit amet, con lorem3",
  },
  {
    icon: "leaf-outline",
    heading: "PRIZES WORTH LAKHS OF RUPEES.",
    description:
      "lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit amet, con lorem3",
  },
  {
    icon: "cart-outline",
    heading: "SPECIAL CHIEF GUEST.",
    description:
      "lorem3 is Lorem ipsum dolor sit amet, con lorem3 lorem3 is Lorem ipsum dolor sit amet, con lorem3",
  },
];

export default function Features() {
  const customInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <>
      <section className="Features-section" id="Features-section">
        <Particles
          init={customInit}
          options={{
            background: {
              color: {
                value: "#00bfff",
              },
            },
            preset: "links",
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 5,
              },
            },
          }}
        />
        <div className="Features-heading-wrapper" id="Features-heading-wrapper">
          <h2 className="Features-heading-h2  u-colorful-text-1">
            {/* EXCITING EVENTS FOR EVERYONE */}
            <Glitch value={"EXCITING EVENTS FOR EVERYONE"}></Glitch>
          </h2>
          <p className="Features-heading-p" id="Features-heading-p">
            The events and competitions at Ekarikthin belong to a variety of
            cultural categories such as Music, Dance, Literary, Quiz, Drama,
            Fine Arts, Film, and many more. Here participants get to showcase
            their talents and win laurels for their respective colleges.
          </p>
        </div>
        <div className="row Features-features clearfix">
          {data.map((item, ind) => (
            <div key={ind} className="Features-feature">
              <ion-icon name={item.icon}></ion-icon>
              <h3 className="Features-feature-h3">{item.heading}</h3>
              <p className="Features-feature-p">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
