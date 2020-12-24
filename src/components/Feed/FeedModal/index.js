import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../services/api';
import Error from '../../Error';
import Loading from '../../Loading';
import PhotoContent from '../../Photo/PhotoContent';
import * as S from './styled';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <S.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.Modal>
  );
};

export default FeedModal;
