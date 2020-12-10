import React from 'react';
import * as S from './styled';

const Button = ({ children, ...props }) => {
  return <S.ButtonForm {...props}>{children}</S.ButtonForm>;
};

export default Button;
