import React from "react";
import styled from "styled-components";
import bgImg from "./assets/bg.png";
import Sidebar from "./Sidebar";
import TextMain from "./TextMain";

export default function Main({
  children,
  title,
  textMain = "NITN Welcomes You",
}) {
  return (
    <Container>
      <Wrapper>
        <Sidebar title={title}>{children}</Sidebar>
        <TextMain text={textMain} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: #eefcff;
  height: 95vh;
  margin-top: 0.81rem;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
