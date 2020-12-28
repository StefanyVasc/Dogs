import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../../../assets/enviar.svg';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../services/api';
import Error from '../../Error';
import * as S from './styled';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');

    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <S.CommentForm
      onSubmit={handleSubmit}
      className={`${single ? 'singlePage' : ''}`}
    >
      <S.CommentLabel htmlFor="comment">
        Que tal deixar um comentário?
      </S.CommentLabel>
      <S.CommentTextArea
        id="comment"
        placeholder=""
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <S.CommentButton>
        <Enviar />
      </S.CommentButton>
      <Error error={error} />
    </S.CommentForm>
  );
};

export default PhotoCommentsForm;
