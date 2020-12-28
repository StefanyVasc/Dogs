import styled from 'styled-components';

export const Title = styled.h1`
  font-family: var(--typeSecond);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--primary-color);
    position: absolute;
    bottom: 5px;
    left: --5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);

  .AppBody {
    flex: 1;
  }
`;
