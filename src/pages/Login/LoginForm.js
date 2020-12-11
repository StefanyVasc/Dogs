import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(username.value, password.value),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => console.log(json));
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
