import { css, createGlobalStyle } from "styled-components";

const reset = css`
  html,
  body {
    font-family: "Helvetica", sans-serif;
    height: 100%;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  a,
  address,
  img,
  strong,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  main,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background-color: darkslategray;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const ResetStyles = createGlobalStyle`${reset}`;

const ProjectTheme = {
  color: {
    primary: "#f90",
    secondary: "#212353",
    secondary_light: "#bcbde3",
  },
};
const AltProjectTheme = {};

export { ResetStyles, ProjectTheme, AltProjectTheme };
