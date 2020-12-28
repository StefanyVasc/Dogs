import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../../components/Feed';
import { Layout } from '../../components/Layout/styled';
import { UserContext } from '../../components/UserStorage/UserContext';
import NotFound from '../NotFound';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';

const Account = () => {
  const { data } = useContext(UserContext);
  return (
    <Layout as="section">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Account;
