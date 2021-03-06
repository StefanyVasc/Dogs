import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../components/UserStorage/UserContext';
import NotFound from '../NotFound';
import LoginForm from './LoginForm/LoginForm';
import LostPassword from './LostPassword/LostPassword';
import Register from './Register/Register';
import ResetPassword from './ResetPassword/ResetPassword';
import * as S from './styled';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <S.LoginContainer>
      <S.LoginPagesForms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<Register />} />
          <Route path="perdeu" element={<LostPassword />} />
          <Route path="resetar" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.LoginPagesForms>
    </S.LoginContainer>
  );
};

export default Login;
