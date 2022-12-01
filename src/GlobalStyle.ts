import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  };
  img {
    max-width: 100%;
  };

  h1, h2 {
    font-weight: 800;
    margin: 0px;

  }
  h3 {
    font-weight: 700;
    margin: 0px;
  }
  p {
    font-weight: 400;
    margin: 0px;
  }
`;

export default GlobalStyle;
