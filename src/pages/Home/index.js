import React from 'react';
import Feed from '../../components/Feed';
import * as S from './styled';
/* import Loading from '../../components/Loading'; */

const Home = () => {
  return (
    <S.MainContainer as="section">
      <Feed />
      {/* <Loading /> */}
    </S.MainContainer>
  );
};

export default Home;
