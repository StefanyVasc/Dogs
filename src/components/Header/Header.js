import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../Layout/styled';

const Header = () => {
  return (
    <div>
      <S.Layout as="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login | Cadastro</Link>
      </S.Layout>
      {/* <nav className="container">

      </nav> */}
    </div>
  );
};

export default Header;
