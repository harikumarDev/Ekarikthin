import React, { useContext } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Footer() {
  const { user } = useContext(UserContext);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="Footer-section">
      <div className="footer-details">
        <div>
          <div className="logo-foot">
            <img src="/logo.png" alt="ekarikthin" height="75px" />
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
                <a rel="noreferrer" href="/">
                  Home
                </a>
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
                <Link onClick={scroll} to="/organisers">
                  Organisers
                </Link>
              </li>
              <li>
                <RiArrowRightSLine />{" "}
                <Link onClick={scroll} to="registration">
                  Register now!
                </Link>
              </li>
              {!user && (
                <li>
                  <RiArrowRightSLine />{" "}
                  <Link onClick={scroll} to="/admin/login">
                    Admin Login
                  </Link>
                </li>
              )}
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
                nitn.ekarikthin@gmail.com
              </span>
            </p>
          </div>
          <div className="social-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Ekarikthin22/"
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
    </section>
  );
}
