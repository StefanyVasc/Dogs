import styled from 'styled-components';
import media from 'styled-media-query';
import LoginPhoto from '../../assets/login.jpg';

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${LoginPhoto}) no-repeat center center;
    background-size: cover;
  }

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  `}
`;

export const LoginPagesForms = styled.div`
  max-width: 30rem;
  padding: 1rem;

  ${media.lessThan('medium')`
    max-width: 100%;
  `}
`;
