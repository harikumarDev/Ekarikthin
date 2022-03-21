import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Layout.css";
import Footer from "./Footer";
import { UserContext } from "../../Context/UserContext";
import { notifyError, notifySuccess } from "../../utils/Notification";

export default function Layout({ children, title = "Ekarikthin'22" }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    const { data } = await axios.get("/api/admin/logout");
    if (data.success) {
      localStorage.removeItem("user");
      setUser(null);
      notifySuccess("Logged out succesfully");
      navigate("/");
    } else {
      notifyError("Something went wrong. Please try again");
    }
  };

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
            {user && (
              <>
                <NavLink to="/admin/verify">VERIFY TOKEN</NavLink>
                <NavLink onClick={handleLogout} to="/">
                  LOGOUT
                </NavLink>
              </>
            )}
            <NavLink className="navRegister" to="/registration">
              REGISTER
            </NavLink>
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
