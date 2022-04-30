import React, { useEffect, useState } from "react";
import "./Home.css";
import "./queries.css";
import Landing from "./SubComponents/Landing/Landing";
import Features from "./SubComponents/Features/Features";
import Gallery from "./SubComponents/Gallery/Gallery";
import Sponsors from "./SubComponents/Sponsors/Sponsors";
// import Testimonials from "./SubComponents/Testimonials/Testimonials";
import Nav from "./SubComponents/Nav/Nav";
import Bike from "../Global/Bike/Bike";

export default function Home() {
  const [showNav, setShowNav] = useState(true);

  const getOffset = (element) => {
    const rect = element?.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };

  const listenToScroll = () => {
    let heightToHideFrom =
      getOffset(document.querySelector("#footerBtm")) - 1000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      showNav && // to limit setting state only the first time
        setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-comp">
      {showNav && <Nav />}
      <Landing />
      <Features />
      <Bike />
      <Gallery />
      <Sponsors />
      {/* <Testimonials /> */}
    </div>
  );
}
