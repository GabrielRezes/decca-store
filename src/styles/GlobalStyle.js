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
    color: inherit;
  }

  body {

    background: #fffdfc;

    &::-webkit-scrollbar {
      width: 8px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: orange;        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: blue;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid orange;  /* creates padding around scroll thumb */
    }
  }

  button, ul, li {
    cursor: pointer
  }
`;

export default GlobalStyle;