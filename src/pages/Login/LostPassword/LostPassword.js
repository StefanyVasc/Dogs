import React from 'react';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../components/Head';
import Input from '../../../components/Input';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';
import { PASSWORD_LOST } from '../../../services/api';
import { Title } from '../../../styles/elements/base';
import * as S from './styled';

const LostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <Head title="Perdeu" description="Área para recuperar a senha" />
      <Title>Perdeu a senha?</Title>
      {data ? (
        <S.LostPasswordPassword>{data}</S.LostPasswordPassword>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LostPassword;
