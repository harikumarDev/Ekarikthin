import React from "react";
import "./Home.css";
import "./queries.css";
import Landing from "./SubComponents/Landing/Landing";
import Features from "./SubComponents/Features/Features";
import Gallery from "./SubComponents/Gallery/Gallery";
// import Sponsors from "./SubComponents/Sponsors/Sponsors";
// import Testimonials from "./SubComponents/Testimonials/Testimonials";
import Nav from "./SubComponents/Nav/Nav";
import Bike from "../Global/Bike/Bike";

export default function Home() {
  return (
    <div className="home-comp">
      <Nav />
      <Landing />
      <Features />
      <Bike />
      <Gallery />
      {/* <Sponsors /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
