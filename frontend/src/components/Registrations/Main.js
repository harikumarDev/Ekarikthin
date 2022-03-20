import React from "react";
import "./Registrations.css";
import regImg from "../../images/register.svg";

export default function Main({ children, title = "Register" }) {
  return (
    <div className="registerEvent">
      <div className="formContainer">
        <div className="regForm">
          <h1 className="regTitle">{title}</h1>
          {children}
        </div>
        <div className="formImg">
          <img src={regImg} alt="register" />
        </div>
      </div>
    </div>
  );
}
