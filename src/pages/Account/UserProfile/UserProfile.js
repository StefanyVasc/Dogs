import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../../components/Feed';
import Head from '../../../components/Head';
import { Title } from '../../../styles/elements/base';
import { MainContainer } from '../../Home/styled';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <MainContainer as="section">
      <Head title={user} description="Perfil do usuário loagado" />
      <Title>{user}</Title>
      <Feed user={user} />
    </MainContainer>
  );
};

export default UserProfile;
