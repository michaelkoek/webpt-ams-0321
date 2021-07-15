import React from "react";
import styled from "styled-components";

const RadioGroup = ({ values, name, onChange }) => {
  return (
    <GroupContainer>
      {values.length > 0 &&
        values.map((val) => (
          <RadioItem key={val}>
            <Radio
              type="radio"
              name={name}
              value={val}
              id={`radio-item-${val}`}
              onChange={onChange}
            />
            <Label htmlFor={`radio-item-${val}`}>{val}</Label>
          </RadioItem>
        ))}
    </GroupContainer>
  );
};

const GroupContainer = styled.section`
  background-color: white;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const RadioItem = styled.section`
  position: relative;
  border: 1px solid #b6592b;
  border-radius: 5px;
`;

const Label = styled.label`
  padding: 1rem 1.3rem;
  text-align: center;
  display: block;
  font-size: 1rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`;

const Radio = styled.input`
  display: none;

  &:checked ~ label {
    background-color: ${({ theme }) => theme.color.secondary_light};
    color: black;
  }

  &:disabled ~ label,
  &:checked:disabled ~ label {
    background-color: #bdbbbb;
    color: white;
    cursor: not-allowed;
  }

  &:checked:disabled ~ label {
    background-color: darkslategray;
  }
`;

export default RadioGroup;
