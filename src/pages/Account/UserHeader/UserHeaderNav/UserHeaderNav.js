import React, { useContext, useState } from 'react';
import { ReactComponent as AddPhotos } from '../../../../assets/adicionar.svg';
import { ReactComponent as MyStats } from '../../../../assets/estatisticas.svg';
import { ReactComponent as MyPhotos } from '../../../../assets/feed.svg';
import { ReactComponent as Logout } from '../../../../assets/sair.svg';
import { UserContext } from '../../../../components/UserStorage/UserContext';
import * as S from './styled';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <S.HeaderNav>
      <S.NavLinkMenu to="/conta" end activeClassName>
        <MyPhotos />
        {mobile && 'Minhas Fotos'}
      </S.NavLinkMenu>
      <S.NavLinkMenu to="/conta/estatisticas" activeClassName>
        <MyStats />
        {mobile && 'Estatisticas'}
      </S.NavLinkMenu>
      <S.NavLinkMenu to="/conta/postar" activeClassName>
        <AddPhotos />
        {mobile && 'Adicionar Fotos'}
      </S.NavLinkMenu>
      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </S.HeaderNav>
  );
};

export default UserHeaderNav;
