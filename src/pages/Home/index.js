import React from 'react';
import Feed from '../../components/Feed';
import Head from '../../components/Head';
import * as S from './styled';

const Home = () => {
  return (
    <S.MainContainer as="section">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </S.MainContainer>
  );
};

export default Home;
