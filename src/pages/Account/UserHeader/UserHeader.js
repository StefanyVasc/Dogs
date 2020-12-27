import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from '../../../styles/elements/base';
import * as S from './styled';
import UserHeaderNav from './UserHeaderNav/UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Postar Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <S.Header>
      <Title>{title}</Title>
      <UserHeaderNav />
    </S.Header>
  );
};

export default UserHeader;
