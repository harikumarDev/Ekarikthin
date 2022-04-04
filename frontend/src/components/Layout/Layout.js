import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Layout.css";
import Footer from "./Footer";
import { UserContext } from "../../Context/UserContext";
import { notifyError, notifySuccess } from "../../utils/Notification";

export default function Layout({ children, title = "Ekarikthin'22" }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user, setUser } = useContext(UserContext);

  const [showMenu, setShowMenu] = useState(false);
  const [pTitle, setTitle] = useState(title);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const arr = pathname.split("/");
    if (arr[1] !== "") {
      setTitle("Ekarikthin'22 - " + arr[1].toUpperCase());
    } else {
      setTitle(title);
    }
  }, [pathname, title]);

  return (
    <div className="container">
      <Helmet>
        <title>{pTitle}</title>
        <meta name="description" content="NITN Techno-Cultural fest" />
      </Helmet>

      <header className="header">
        <nav>
          <NavLink to="/">
            {/* LOGO */}
            <div className="logoNav">
              <img src="/logo.png" alt="Ekarikthin'22" height="50px" />
            </div>
          </NavLink>

          <div className="navLinks">
            <div
              className="hamburgerMenu"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>
            <NavLink to="/events">EVENTS</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/organisers">ORGANISERS</NavLink>
            {user && (
              <>
                <NavLink to="/admin/verify">VERIFY TOKEN</NavLink>
                <NavLink to="/admin/allregistrations">ALL REGS</NavLink>
                <NavLink onClick={handleLogout} to="/">
                  LOGOUT
                </NavLink>
              </>
            )}
            <NavLink className="navRegister" to="/registration">
              REGISTER
            </NavLink>
          </div>

          <div className={showMenu ? "mob-cont" : "hidden"}>
            <div
              className="mob-nav-links"
              onClick={() => setShowMenu(!showMenu)}
            >
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/events">EVENTS</NavLink>
              <NavLink to="/gallery">GALLERY</NavLink>
              <NavLink to="/organisers">ORGANISERS</NavLink>
              {user && (
                <>
                  <NavLink to="/admin/verify">VERIFY TOKEN</NavLink>
                  <NavLink to="/admin/allregistrations">ALL REGS</NavLink>
                  <NavLink onClick={handleLogout} to="/">
                    LOGOUT
                  </NavLink>
                </>
              )}
              <NavLink className="navRegister" to="/registration">
                REGISTER
              </NavLink>
            </div>
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
