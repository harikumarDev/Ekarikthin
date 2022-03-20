import React from "react";
import "./Layout.css";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function Layout({ children, title = "Ekarikthin'22" }) {
  return (
    <div className="container">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="NITN Techno-Cultural fest" />
      </Helmet>

      <header className="header">
        <nav>
          <NavLink to="/">
            {/* LOGO */}
            <div className="logoNav">
              <img src="/title.png" alt="ekarikthin" height="45px" />
            </div>
          </NavLink>

          <div className="navLinks">
            <NavLink to="/events">EVENTS</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/organisers">ORGANISERS</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink className="navRegister" to="/registration">
              REGISTER
            </NavLink>
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main>{children}</main>

      <footer>FOOTER</footer>
    </div>
  );
}
