import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;

  ${({ margin }) => margin && css`margin-${margin}: 10px;`}
`;

const SelectContainer = styled.div`
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? "#dcd7d7" : theme.color.secondary_light};
  width: 100%;
  position: relative;
  color: ${({ isDisabled }) => (isDisabled ? "#989393" : "black")};
  padding-left: 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  &:before {
    content: "";
    height: 35px;
    width: 20px;

    position: absolute;
    right: 0;
    bottom: 0;
  }
  select {
    -webkit-appearance: none;
    background-color: transparent;
    width: 100%;
    color: black;
    border: none;
    height: 40px;
    font-size: 0.9rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      color: #ccabab;
    }
    &:focus {
      outline: none;
    }
  }
`;

const Label = styled.span`
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  color: ${({ isDisabled }) => (isDisabled ? "#989393" : "black")};
  padding: 10px 0;
  font-weight: 300;
  display: block;
`;

const Dropdown = ({
  label,
  disabled = false,
  name = "",
  onChange,
  children,
}) => {
  return (
    <Container>
      <label>
        {label && <Label isDisabled={disabled}>{label}</Label>}
        <SelectContainer isDisabled={disabled}>
          <select name={name} disabled={disabled} onChange={onChange}>
            {children}
          </select>
        </SelectContainer>
      </label>
    </Container>
  );
};

export default Dropdown;
