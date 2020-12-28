import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../UserStorage/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';
import * as S from './styled';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  const commentSection = useRef(null);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <S.PhotoCommentsList ref={commentSection}>
        {comments.map((comment) => (
          <S.PhotoCommentsItem key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </S.PhotoCommentsItem>
        ))}
      </S.PhotoCommentsList>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
