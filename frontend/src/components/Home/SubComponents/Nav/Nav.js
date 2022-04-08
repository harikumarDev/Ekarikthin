import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { RiFootprintLine } from "react-icons/ri";
import "./Nav.css";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <>
      <nav className="Nav-nav">
        <Link href="#" to="Landing-section" smooth="true">
          <AiOutlineHome />
        </Link>
        <Link href="#Features-section" to="Features-section" smooth="true">
          <BsInfoCircle />
        </Link>
        {/* <Link href="#Gallery-section" to="Gallery-section" smooth="true"> */}
        <Link href="#Bike-section" to="Bike-section" smooth="true">
          <MdOutlineAddPhotoAlternate />
        </Link>
        {/* <Link href="#Sponsors-section" to="Sponsors-section" smooth="true">
					<RiServiceLine />
				</Link> */}
        {/* <Link
					href="#Testimonials-section"
					to="Testimonials-section"
					smooth="true"
				>
					<BiMessageSquareDetail />
				</Link> */}
        <Link href="#Footer-section" to="Footer-section" smooth="true">
          <RiFootprintLine />
        </Link>
      </nav>
    </>
  );
}
