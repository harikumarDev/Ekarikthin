import React from "react";
import styled from "styled-components";

export default function TextMain({ text }) {
  return (
    <Container>
      <img src="/NIT.png" alt="NIT-N" height="25%" />
      <h1>{text}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  img {
    margin-bottom: 1rem;
  }

  @media (max-width: 1130px) {
    display: none;
  }

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    font-family: 'Dancing Script', cursive;
    @media (max-width: 1130px) {
      display: none;
    }
  }
`;
