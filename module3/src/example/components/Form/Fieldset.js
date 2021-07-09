import React from "react";
import styled from "styled-components";

const Fieldset = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.fieldset`
  background-color: #fafbff;
  padding: 1.3rem 2rem;
  border-radius: 5px;
  border: 1px solid #212353;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  color: #212353;
  margin-bottom: 1.5rem;
`;

export default Fieldset;
