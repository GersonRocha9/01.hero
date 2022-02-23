import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #121212;
    font-family: "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
    background-color: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

`;

export default GlobalStyle;
