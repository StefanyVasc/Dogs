import React, { useState } from 'react';
import * as S from './styled';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <S.ImageWrapper>
      {skeleton && <S.ImageSkeleton />}

      <S.ImageImg onLoad={handleLoad} alt={alt} {...props} />
    </S.ImageWrapper>
  );
};

export default Image;
