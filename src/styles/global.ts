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
  p,
  input,
  button {
    font-family: 'Poppins', sans-serif;
    color: #000;
  }

  p, input {
    font-size: 12px;
    font-weight: 400;
  }

  input {    
    border: 0px solid transparent;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }

  button {
    border: 0px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    transition: 180ms ease-in-out;
  }
`;
