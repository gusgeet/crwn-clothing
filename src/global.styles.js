import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Barlow Condensed', sans-serif;
    padding: 20px 40px;
    background: #5a4141dd;
    color: white;

    @media screen and (max-width: 800px) {
        padding: 0 auto;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
`