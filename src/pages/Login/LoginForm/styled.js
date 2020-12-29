import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { animaLeft } from '../../../styles/settings/animations';

export const FormSection = styled.section`
  animation-duration: 0.3s;
  animation-name: ${animaLeft};
  animation-fill-mode: forwards;
`;

export const FormLogin = styled.form`
  margin-bottom: 2rem;
`;

export const FormBtnLostPassword = styled(Link)`
  display: inline-block;
  color: var(--grey-light);
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: var(--grey-light);
  }
`;

export const FormCadastroContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const FormCadastroSubtitle = styled.h2`
  font-family: var(--typeSecond);
  line-height: 1;
  font-size: 2rem;

  &::after {
    content: '';
    display: block;
    background: var(--grey-lightner);
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
