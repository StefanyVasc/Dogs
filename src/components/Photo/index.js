import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { MainContainer } from '../../pages/Home/styled';
import { PHOTO_GET } from '../../services/api';
import Error from '../Error';
import { Loading } from '../Loading/styled';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MainContainer as="section">
        <PhotoContent single={true} data={data} />
      </MainContainer>
    );
  else return null;
};

export default Photo;
