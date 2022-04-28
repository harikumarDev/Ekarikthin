import React from "react";
import styled from "styled-components";
// import logo from "./assets/logo.svg";

export default function Sidebar({ children, title = "Register" }) {
  return (
    <Container>
      <LogoWrapper>
        <img src="/logo.png" alt="Ekarikthin" />
        <h3>
          Ekarikthin'<span>22</span>
        </h3>
      </LogoWrapper>
      <Content>
        <h3>{title}</h3>
        <MainForm>{children}</MainForm>
      </Content>
      <div>
        <h4>The Annual Techno - Cultural Fest - NITN</h4>
      </div>
    </Container>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const MainForm = styled.div`
  width: 70%;
`;

const LogoWrapper = styled.div`
  text-align: center;

  img {
    height: 4rem;
  }

  h3 {
    color: #e07f00;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: black;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    min-width: 30em;
  }

  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1130px) {
    position: absolute;
    padding: 0;
    width: 100%;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
