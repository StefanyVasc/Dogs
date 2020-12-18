import React, { useContext } from 'react';
import Button from '../../../components/Button/index';
import Error from '../../../components/Error/index';
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
      <Title>Login</Title>
      <S.FormLogin onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </S.FormLogin>
      <S.FormBtnLostPassword to="/login/perdeu">
        Esqueceu a senha?
      </S.FormBtnLostPassword>
      <S.FormCadastroContainer>
        <S.FormCadastroSubtitle>Cadastre-se</S.FormCadastroSubtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <S.FormBtnRegister as={Button} to="/login/criar">
          Cadastro
        </S.FormBtnRegister>
      </S.FormCadastroContainer>
    </S.FormSection>
  );
};

export default LoginForm;
