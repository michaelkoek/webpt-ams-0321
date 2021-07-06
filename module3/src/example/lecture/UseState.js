import React, { useState } from "react";
import styled, { css } from "styled-components";

function UseStateExample() {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <Container hasFlex>
        <label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive((prevState) => !prevState)}
          />
          <span>{isActive ? "online" : "offline"}</span>
        </label>

        <Circle isOnline={isActive} />
      </Container>

      {isActive && (
        <Container>
          <Input
            type="text"
            placeholder="username"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <h1>{inputValue}</h1>
        </Container>
      )}
    </React.Fragment>
  );
}

const Input = styled.input`
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid tomato;
`;

const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
`;

const Container = styled.section`
  padding: 1.5rem;
  border-bottom: 1px solid black;
  margin: 0 5%;
  ${(props) =>
    props.hasFlex &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export default UseStateExample;
