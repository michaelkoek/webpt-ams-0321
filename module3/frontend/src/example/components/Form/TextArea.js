import React from "react";
import styled from "styled-components";

const TextArea = ({ name, onChange, children }) => (
  <TextAreaContainer name={name} onChange={onChange}>
    {children}
  </TextAreaContainer>
);

const TextAreaContainer = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  min-height: 10vh;

  &:focus {
    color: #495057;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;

export default TextArea;
