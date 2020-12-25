import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { PHOTO_DELETE } from '../../../services/api';
import * as S from './styled';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Você realmente deseja deletar essa foto?');
    if (confirm) {
      const token = localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      response.ok && window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <S.PhotoDeleteButton disabled>Deletando...</S.PhotoDeleteButton>
      ) : (
        <S.PhotoDeleteButton onClick={handleClick}>Deletar</S.PhotoDeleteButton>
      )}
    </>
  );
};

export default PhotoDelete;
