import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../../components/Feed';
import { Title } from '../../../styles/elements/base';
import { MainContainer } from '../../Home/styled';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <MainContainer as="section">
      <Title>{user}</Title>
      <Feed user={user} />
    </MainContainer>
  );
};

export default UserProfile;
