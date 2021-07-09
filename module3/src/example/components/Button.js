import React from "react";
import styled from "styled-components";

const Button = ({
  btnType = "primary",
  type = "button",
  buttonClick,
  disabled,
  children,
}) => {
  const buttonTypeMap = {
    default: BaseButton,
    simple: SimpleBtn,
    primary: PrimaryBtn,
    secondary: SecondaryBtn,
  };

  const TransformButtonType = buttonTypeMap[btnType] || BaseButton;

  return (
    <TransformButtonType onClick={buttonClick} type={type} disabled={disabled}>
      {children}
    </TransformButtonType>
  );
};

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
`;

const SimpleBtn = styled(BaseButton)`
  background-color: transparent;
`;

const PrimaryBtn = styled(BaseButton)`
  background-color: rgba(255, 210, 117, 1); /* orange yellow */
  &:hover {
    background-color: #f5a300;
  }
`;
const SecondaryBtn = styled(BaseButton)`
  background-color: #a57f60; /* cafe au lait*/
  color: white;

  &:hover {
    background-color: #876b3a;
  }
`;

export default Button;
