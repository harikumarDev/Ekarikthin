import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer-details">
        <div>
          <div className="logo-foot">
            <img src="/title.png" alt="ekarikthin" height="45px" />
          </div>
          <div className="foot-text">
            <p>
              The events and competitions at Ekarikthin belong to a variety of
              cultural categories such as Music, Dance, Literary, Quiz, Drama,
              Fine Arts, Film, and many more. Here participants get to showcase
              their talents and win laurels for their respective colleges.
            </p>
          </div>
        </div>
        <div className="foot-box">
          <div className="footer-head">USEFUL LINKS</div>
          <div className="foot-underline"></div>
          <div>
            <ul>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="/">
                  Home
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="/events">
                  Events
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="organisers">
                  Organisers
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="registration">
                  Register now!
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="/admin/login">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-box">
          <div className="footer-head">CONTACT US</div>
          <div className="foot-underline"></div>
          <div className="cont-details">
            <p>National Insitute of Technology, Nagaland</p>
            <p>Chumukedima, Dimapur 797103</p>
            <p>Nagaland, India</p>
            <p>
              <b>Email:</b>{" "}
              <span style={{ color: "#FFFF5F" }}>
                ekarikthin@nitnagaland.ac.in
              </span>
            </p>
          </div>
          <div className="social-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Ekarikthin/"
            >
              <BsFacebook className="social-icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ekarikthin_/"
            >
              <BsInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyrigths">
        <div>
          <AiOutlineCopyright className="copyright" /> Copyright{" "}
          <b>Ekarikthin'22</b>. All Rights Reserved
        </div>
        <div className="designed-by">Designed by students of NIT Nagaland</div>
      </div>
    </>
  );
}
