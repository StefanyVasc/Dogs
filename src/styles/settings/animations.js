import { keyframes } from 'styled-components';

/* para usar é preciso passar as seguintes propriedades no componente em questão:
  animation-duration: 0.3s;
  animation-name: ${animaLeft};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite (no caso da animação Button animation)
  */

// Não pode esquecer de passar as propriedades acima, senão não funcionará a animação
export const animaLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const scaleUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8)
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const LoadingAnimation = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

export const ButtonAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
