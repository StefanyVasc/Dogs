import React from 'react';
import { Title } from '../../styles/elements/base';
import { MainContainer } from '../Home/styled';

const NotFound = () => {
  return (
    <MainContainer as="div">
      <Title>Erro: 404</Title>
      <p>Oops! Não achamos o que você procurava.</p>
    </MainContainer>
  );
};

export default NotFound;
