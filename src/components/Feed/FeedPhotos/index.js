import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../services/api';
import Error from '../../Error';
import Loading from '../../Loading';
import FeedPhotosItem from '../FeedPhotosItem';
import * as S from './styled';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <S.FeedPhotoList>
        {data.map((photo) => (
          <FeedPhotosItem photo={photo} key={photo.id} />
        ))}
      </S.FeedPhotoList>
    );
  } else return null;
};

export default FeedPhotos;
