import React from "react";
import styled from "styled-components";

import Container from "./Container";

export default function Footer({ children }) {
  return (
    <FooterContainer>
      <Container>{children}</Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  flex: 1;
  background-color: ${({ theme }) => theme.main};
  padding: 1.5rem;
`;
