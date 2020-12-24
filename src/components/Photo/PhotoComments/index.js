import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserStorage/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';
import * as S from './styled';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  return (
    <>
      <S.PhotoCommentsList>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </S.PhotoCommentsList>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
