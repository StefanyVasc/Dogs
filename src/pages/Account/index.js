import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../../components/Feed';
import { Layout } from '../../components/Layout/styled';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';

const Account = () => {
  return (
    <Layout as="section">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </Layout>
  );
};

export default Account;
