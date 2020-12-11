import React from 'react';
import * as S from './styled';

const Input = ({ label, type, name, onChange, value, error, onBlur }) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <S.InputError>{error}</S.InputError>}
    </S.InputWrapper>
  );
};

export default Input;
