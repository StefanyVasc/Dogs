import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { MainContainer } from '../../pages/Home/styled';
import { PHOTO_GET } from '../../services/api';
import Error from '../Error';
import Head from '../Head';
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
        <Head title={data.photo.title} description="Foto clicada do usuário" />

        <PhotoContent single={true} data={data} />
      </MainContainer>
    );
  else return null;
};

export default Photo;
