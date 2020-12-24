import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../services/api';
import Error from '../../Error';
import Loading from '../../Loading';
import FeedPhotosItem from '../FeedPhotosItem';
import * as S from './styled';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <S.FeedPhotoList>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </S.FeedPhotoList>
    );
  else return null;
};

export default FeedPhotos;
