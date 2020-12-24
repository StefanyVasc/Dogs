import React from 'react';
import * as S from './styled';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <S.Photos onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <S.PhotoSpan>{photo.acessos}</S.PhotoSpan>
    </S.Photos>
  );
};

export default FeedPhotosItem;
