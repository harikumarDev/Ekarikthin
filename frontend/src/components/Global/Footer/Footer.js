import React from "react";
import "./Footer.css";
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
    <section className="Footer-section" id="Footer-section">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Ekarikthin/"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ekarikthin_/"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a onClick={scroll} href="/">
              Home
            </a>
          </li>
          <li>
            <Link onClick={scroll} to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link onClick={scroll} to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link onClick={scroll} to="organisers">
              Organisers
            </Link>
          </li>
          <li>
            <Link onClick={scroll} to="/admin/login">
              Admin Login
            </Link>
          </li>
          <li>
            <Link onClick={scroll} to="registration">
              Register now!
            </Link>
          </li>{" "}
          <li>
            <a href="mailto:ekarikthin@nitnagaland.ac.in">Contact us</a>
          </li>
        </ul>
        <p className="u-colorful-text-">
          ©️ Ekarikthin'22 | All Rights Reserved.{" "}
        </p>
      </footer>
    </section>
  );
}
