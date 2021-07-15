import React from "react";
import styled from "styled-components";

const Input = ({
  label,
  name,
  required,
  placeholder,
  onChange,
  type = "text",
  disabled,
}) => {
  return (
    <Container>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

const LabelText = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: black;
  padding: 0.8rem 0;
  font-weight: 300;
  display: block;
`;

export default Input;
