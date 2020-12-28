import React from 'react';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';
import * as S from './styled';

const Footer = () => {
  return (
    <S.Footer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </S.Footer>
  );
};

export default Footer;
