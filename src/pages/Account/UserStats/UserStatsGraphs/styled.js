import styled from 'styled-components';
import media from 'styled-media-query';
import { animaLeft } from '../../../../styles/settings/animations';

export const GraphSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  animation-duration: 0.3s;
  animation-name: ${animaLeft};
  animation-fill-mode: forwards;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;

export const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`;

export const GraphTotal = styled.div`
  grid-column: 1 / 3;
  padding: 2rem;
  font-size: 2rem;

  ${media.lessThan('medium')`
    grid-column: 1;
  `}
`;
