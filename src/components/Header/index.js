import React, { useContext } from 'react';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../UserStorage/UserContext';
import * as S from './styled';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <S.HeaderWrapper>
      <S.HeaderNav as="nav">
        <S.HeaderLogoLink to="/" aria-label="Dogs - Home">
          <Dogs />
        </S.HeaderLogoLink>
        {data ? (
          <S.HeaderButton to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </S.HeaderButton>
        ) : (
          <S.HeaderButton to="/login">Login | Cadastro</S.HeaderButton>
        )}
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};

export default Header;
