import React from "react";
import styled from "styled-components";

import Container from "../Container";

function Header({ children }) {
  return (
    <StyledHeader>
      <Container>
        <h1>{children}</h1>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  flex: 1;
  padding: 1.5rem;
`;

export default Header;
