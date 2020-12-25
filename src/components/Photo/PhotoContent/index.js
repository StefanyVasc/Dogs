import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../../styles/elements/base';
import { UserContext } from '../../UserStorage/UserContext';
import PhotoComments from '../PhotoComments';
import PhotoDelete from '../PhotoDelete';
import * as S from './styled';

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <S.PhotoContentDiv>
      <S.PhotoContentImg>
        <img src={photo.src} alt={photo.title} />
      </S.PhotoContentImg>
      <S.PhotoContentDetails>
        <div>
          <S.DetailsAuthor>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <S.DetailsView>{photo.acessos}</S.DetailsView>
          </S.DetailsAuthor>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <S.DetailsAttributes>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
            </li>
          </S.DetailsAttributes>
        </div>
      </S.PhotoContentDetails>
      <PhotoComments id={photo.id} comments={comments} title={photo.title} />
    </S.PhotoContentDiv>
  );
};

export default PhotoContent;
