import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #000;
    font-family: 'Poppins', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Poppins', sans-serif;
    color: #000;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    transition: 180ms ease-in-out;
  }
`;
