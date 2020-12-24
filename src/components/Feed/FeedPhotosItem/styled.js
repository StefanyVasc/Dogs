import styled from 'styled-components';
import media from 'styled-media-query';
import Views from '../../../assets/visualizacao.svg';

export const Photos = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  :hover span {
    display: flex;
  }

  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  ${media.lessThan('medium')`
    :nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  `}
`;

export const PhotoSpan = styled.span`
  grid-area: 1/1;
  background: rgba(0, 0, 0, 0.3);
  color: var(--default-color-light);
  font-size: 1rem;
  text-align: center;
  display: none;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    background: url(${Views}) no-repeat;
  }
`;
