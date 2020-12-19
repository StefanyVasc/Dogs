import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styled';

const Error = ({ error }) => {
  if (!error) return null;
  return <S.ErrorMsg>{error}</S.ErrorMsg>;
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
