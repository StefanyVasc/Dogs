import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/index';
import Error from '../../../components/Error/index';
import Head from '../../../components/Head/index';
import Input from '../../../components/Input/index';
import { UserContext } from '../../../components/UserStorage/UserContext';
import useForm from '../../../hooks/useForm';
import { Title } from '../../../styles/elements/base';
import * as S from './styled';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <S.FormSection>
      <Head title="Login" description="Área de Login do Dogs" />
      <Title>Login</Title>
      <S.FormLogin onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </S.FormLogin>
      <S.FormBtnLostPassword to="/login/perdeu">
        Esqueceu a senha?
      </S.FormBtnLostPassword>
      <S.FormCadastroContainer>
        <S.FormCadastroSubtitle>Cadastre-se</S.FormCadastroSubtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button as={Link} to="/login/criar">
          Cadastro
        </Button>
      </S.FormCadastroContainer>
    </S.FormSection>
  );
};

export default LoginForm;
