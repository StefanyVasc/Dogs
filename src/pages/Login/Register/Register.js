import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../components/Head';
import Input from '../../../components/Input';
import { UserContext } from '../../../components/UserStorage/UserContext';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';
import { USER_POST } from '../../../services/api';
import { Title } from '../../../styles/elements/base';
import * as S from './styled';

const Register = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  /* const password = useForm('password'); */

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    response.ok && userLogin(username.value, password.value);
  }

  return (
    <S.RegisterSection>
      <Head title="Cadastro" description="Área de cadastro do site Dogs." />
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name={username} {...username} />
        <Input label="Email" type="email" name={email} {...email} />
        <Input label="Senha" type="password" name={password} {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </S.RegisterSection>
  );
};

export default Register;
