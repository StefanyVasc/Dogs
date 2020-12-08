import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../../assets/usuario.svg';
import { Layout } from '../Layout/styled';

export const HeaderWrapper = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

export const HeaderNav = styled(Layout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const HeaderLogoLink = styled(Link)`
  padding: 0.5rem 0;
`;

export const HeaderButton = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${profile}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -2px;
  }
`;
