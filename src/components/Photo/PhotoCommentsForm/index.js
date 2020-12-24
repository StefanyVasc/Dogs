import React, { useState } from 'react';
import { ReactComponent as Enviar } from '../../../assets/enviar.svg';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../services/api';
import Error from '../../Error';

const PhotoCommentsForm = ({ id, setComments }) => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Deixe seu comentário</label>
      <textarea
        id="comment"
        placeholder=""
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
