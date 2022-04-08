import React from "react";
import "../../Home.css";
import "../../queries.css";
import "./Features.css";
// import Particles from "react-tsparticles";
// import { loadLinksPreset } from "tsparticles-preset-links";
import Glitch from "../../../Global/Glitch/Glitch";

const data = [
  {
    icon: "infinite-outline",
    heading: "BIGGEST TECHNO-CULTURAL FEST OF NAGALAND.",
    description:
      "Ekarikthin includes various technical and cultural activities. It is a platform for everyone to showcase their talent and creativity",
  },
  {
    icon: "alarm-outline",
    heading: "ANNUAL EVENT.",
    description: "It is conducted every year in the month of April or May",
  },
  {
    icon: "cash-outline",
    heading: "PRIZES WORTH LAKHS OF RUPEES.",
    description: "Each participant will be given a chance to win a prize",
  },
  {
    icon: "person-outline",
    heading: "SPECIAL CHIEF GUEST.",
    description:
      "We have a special guest who will be giving a speech on the theme of Ekarikthin",
  },
];

export default function Features() {
  // const customInit = async (engine) => {
  //   await loadLinksPreset(engine);
  // };

  return (
    <>
      <section className="Features-section" id="Features-section">
        {/* <Particles
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
                value: 15,
              },
              size: {
                value: 5,
              },
              zIndex: {
                value: 6,
              }
            },
          }}
        /> */}
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
