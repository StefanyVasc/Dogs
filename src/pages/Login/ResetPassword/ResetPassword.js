import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../components/Head';
import Input from '../../../components/Input';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';
import { PASSWORD_RESET } from '../../../services/api';
import { Title } from '../../../styles/elements/base';
import * as S from './styled';

const ResetPassword = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <S.LostPasswordSection>
      <Head title="Reset" description="Área de reset das senhas." />
      <Title>Resete a Senha</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </S.LostPasswordSection>
  );
};

export default ResetPassword;
