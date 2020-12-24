import React from 'react';
import * as S from './styled';
const FeedPhotosItem = ({ photo }) => {
  return (
    <S.Photos>
      <img src={photo.src} alt={photo.title} />
      <S.PhotoSpan>{photo.acessos}</S.PhotoSpan>
    </S.Photos>
  );
};

export default FeedPhotosItem;
