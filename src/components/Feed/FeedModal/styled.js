import styled from 'styled-components';
import media from 'styled-media-query';

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  display: flex;
  z-index: 100;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  ${media.lessThan('medium')`
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  `}
`;
