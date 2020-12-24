import styled from 'styled-components';
import media from 'styled-media-query';
import { animaLeft } from '../../../styles/settings/animations';

export const FeedPhotoList = styled.ul`
  animation-duration: 0.3s;
  animation-name: ${animaLeft};
  animation-fill-mode: forwards;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`;
