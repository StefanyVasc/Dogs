import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: var(--default-color);
    padding-top: 4rem;
    font-family: var(--typeFirst);
  }


  img{
    display: block;
    max-width: 100%;
  }

  button, input{
    display: block;
    font-size: 1rem;
    font-family: var(--typeFirst);
    color: var(--default-color);

  }

  a {
    text-decoration: none;
    color: var(--default-color);
  }

  .VictoryContainer{
    height: initial !important;
  }
`;

export default GlobalStyles;
