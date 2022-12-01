import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  img {
    max-width: 100%;
  };
  h1, 
  h2, 
  h3, 
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
