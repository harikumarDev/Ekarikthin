import React from "react";
import "./Landing.css";
import LandingVideo from "../../../../videos/Landing-cheering_crowd.mp4";
// import LandingVideo1 from "../../../../videos/Untitled.mp4";
import Poster from "../../../../images/Landing-poster.png";
import "../../Home.css";
import "../../queries.css";
import { Link } from "react-scroll";
import Glitch from "../../../Global/Glitch/Glitch";

export default function Landing() {
  return (
    <section className="Landing-section" id="Landing-section">
      <div className="Landing-div" id="Landing-div">
        <div className="Landing-video-wrapper">
          <video autoPlay={true} loop muted={true} poster={Poster}>
            <source
              src={LandingVideo}
              id="Landing-video"
              className="Landing-video"
            />
          </video>
        </div>
        <div className="Landing-wrapper" id="Landing-wrapper">
          <div className="Landing-txt centerV">
            <div>
              <h2 className="Landing-left-to-right u-colorful-text-4">
                <Glitch value={"WELCOME TO"} />
                {/* Welcome to */}
                <h1 className="Landing-h1">
                  {/* Ekarikthin' 22 */}
                  <div className="Landing-logo-txt">
                    <img src="/logo.png" width="80px" height="80px" alt="E" />
                    <span>KARIKTHIN'22</span>
                  </div>
                </h1>
              </h2>
              <br></br>
              <h2 className="Landing-right-to-left u-colorful-text-4">
                <Glitch id="Landing-Glitch-h1" value={"4-5 MAY"}></Glitch>
                <br></br>
                <Glitch value={"NIT NAGALAND"}></Glitch>
              </h2>
            </div>
          </div>
          <div className="Landing-btn-div">
            <Link
              href="#Features-section"
              className="Landing-btn Landing-btn--white Landing-btn--slideTop  u-colorful-text-1"
              to="Features-section"
              smooth="true"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
