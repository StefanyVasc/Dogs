import React from 'react';
import Image from '../../Image';
import * as S from './styled';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <S.Photos onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />

      <S.PhotoSpan>{photo.acessos}</S.PhotoSpan>
    </S.Photos>
  );
};

export default FeedPhotosItem;
