import React from 'react';
import * as S from './styled';

const Input = ({ label, type, name }) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input id={name} type={type} name={name} />
      <S.InputError>Error..</S.InputError>
    </S.InputWrapper>
  );
};

export default Input;
