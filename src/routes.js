import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Photo from './components/Photo';
import { UserStorage } from './components/UserStorage/UserContext';
import Account from './pages/Account';
import ProtectedRoute from './pages/Account/ProtectedRoute';
import UserProfile from './pages/Account/UserProfile/UserProfile';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<Account />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
