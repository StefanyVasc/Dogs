import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import fonts from '../settings/fonts';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: #333;
    padding-top: 4rem;
    font-family: ${fonts.typeFirst}
  }


  img{
    display: block;
    max-width: 100%;
  }

  button, input{
    display: block;
    font-size: 1rem;
    font-family: ${fonts.typeFirst};
    color: #333;

  }

  a {
    text-decoration: none;
  }

  .container{
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
