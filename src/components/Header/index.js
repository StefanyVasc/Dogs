import React from 'react';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderNav as="nav">
        <S.HeaderLogoLink to="/" aria-label="Dogs - Home">
          <Dogs />
        </S.HeaderLogoLink>
        <S.HeaderButton to="/login">Login | Cadastro</S.HeaderButton>
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};

export default Header;
