import styled from 'styled-components';
import media from 'styled-media-query';
import { animaLeft } from '../../../styles/settings/animations';

export const UserPhotoPostSection = styled.section`
  animation-duration: 0.3s;
  animation-name: ${animaLeft};
  animation-fill-mode: forwards;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 2rem;
  }

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;

export const PhotoPostPreview = styled.div`
  background-image: ${(props) => props.backgroundImage};
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  ::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
