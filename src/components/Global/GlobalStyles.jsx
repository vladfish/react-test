import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  *::before,
  *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: #E2E2E2;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`
export default GlobalStyles