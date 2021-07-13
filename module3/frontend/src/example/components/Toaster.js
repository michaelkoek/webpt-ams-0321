import React from "react";
import styled from "styled-components";

const Toaster = ({ type = "default", onClick, isActive, children }) => {
  return (
    <Container type={type} isVisible={isActive}>
      <CloseBtn>close</CloseBtn>
      {children}
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  transition-delay: 0.5s;
  transition: bottom 0.45s ease-in-out;
  left: 0;
  right: 0;
  top: 0;
  color: white;
  box-shadow: 0px 2px 3px 1px #5149496e;
  background-color: ${({ type }) => COLORMAP[type]};
  top: ${({ isVisible }) => (isVisible ? 0 : "-100%")};
`;

const CloseBtn = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 25px;
  width: 25px;
  position: relative;
  font-size: 0;
  margin-right: 3.5%;

  &::after,
  &::before {
    content: "";
    height: 100%;
    width: 2px;
    background-color: white;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
  }

  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;

const COLORMAP = {
  error: "orangered",
  warning: "#FDB200",
  default: "#ffffff30",
  success: "#26a526",
};

export default Toaster;
