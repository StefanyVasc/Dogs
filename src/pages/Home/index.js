import React from 'react';
import Feed from '../../components/Feed';
import * as S from './styled';

const Home = () => {
  return (
    <S.MainContainer as="section">
      <Feed />
    </S.MainContainer>
  );
};

export default Home;
