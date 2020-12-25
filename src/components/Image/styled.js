import styled from 'styled-components';
import { ButtonAnimation } from '../../styles/settings/animations';

export const ImageWrapper = styled.div`
  display: grid;
`;

export const ImageSkeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    var(--quarternary-color) 0px,
    var(--default-color-light) 50%,
    var(--quarternary-color) 100%
  );
  background-color: var(--quarternary-color);
  background-size: 200%;

  animation-duration: 1.5s;
  animation-name: ${ButtonAnimation};
  animation-fill-mode: linear;
`;

export const ImageImg = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;
