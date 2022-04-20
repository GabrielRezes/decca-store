import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
	  list-style: none;
    color: inherit
  }

  body {
    background: #ECECF1;
  }

  button, ul, li {
    cursor: pointer
  }
`;

export default GlobalStyle;