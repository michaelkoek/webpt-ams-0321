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
    <label className="form-input">
      <input
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

const Container = styled.label``;

const StyledInput = styled.input``;

const LabelText = styled.span``;

export default Input;
