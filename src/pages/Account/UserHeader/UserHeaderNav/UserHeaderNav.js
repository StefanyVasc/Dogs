import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as AddPhotos } from '../../../../assets/adicionar.svg';
import { ReactComponent as MyStats } from '../../../../assets/estatisticas.svg';
import { ReactComponent as MyPhotos } from '../../../../assets/feed.svg';
import { ReactComponent as Logout } from '../../../../assets/sair.svg';
import { UserContext } from '../../../../components/UserStorage/UserContext';
import useMedia from '../../../../hooks/useMedia';
import * as S from './styled';

const NavItens = ({ mobile, userLogout }) => {
  return (
    <>
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
    </>
  );
};

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 768px)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <S.MobileButton
          aria-label="menu"
          className={`mobileButton ${mobileMenu && 'mobileButtonActive'}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></S.MobileButton>
      )}

      {mobile ? (
        <S.NavMobile
          className={`${mobile ? 'navMobile' : ''} ${
            mobileMenu && 'navMobileActive'
          }`}
        >
          <NavItens mobile={mobile} userLogout={userLogout} />
        </S.NavMobile>
      ) : (
        <S.HeaderNav>
          <NavItens userLogout={userLogout} />
        </S.HeaderNav>
      )}
    </>
  );
};

export default UserHeaderNav;
