import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../services/api';
import Error from '../../Error';
import Loading from '../../Loading';
import FeedPhotosItem from '../FeedPhotosItem';
import * as S from './styled';

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { json, response } = await request(url, options);
      if (response && response.ok && json.lenght < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

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
