import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  *, input, button {
    font-size: 14px;
    border:none;
    font-family: 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    font-weight: 600;
  }
  a{
    text-decoration: none;
    color: white;
  }
`;
