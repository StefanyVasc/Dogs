import PropTypes from 'prop-types';
import React from 'react';
import Error from '../Error';
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
      <Error error={error} />
    </S.InputWrapper>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Input;
