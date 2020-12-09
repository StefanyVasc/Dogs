import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LostPassword from './LostPassword';
import Register from './Register';
import ResetPassword from './ResetPassword';

const Login = () => {
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
