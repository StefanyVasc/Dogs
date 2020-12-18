import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../components/UserStorage/UserContext';
import LoginForm from './LoginForm/LoginForm';
import LostPassword from './LostPassword';
import Register from './Register';
import ResetPassword from './ResetPassword';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<Register />} />
      <Route path="perdeu" element={<LostPassword />} />
      <Route path="resetar" element={<ResetPassword />} />
    </Routes>
  );
};

export default Login;
