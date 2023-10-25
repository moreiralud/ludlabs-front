import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginForm(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        Cookies.set('authenticated', true);
        navigate('/dashboard');
      } else {
        alert('Erro na autenticação');
      }
    } catch (error) {
      console.error('Erro na requisição à API:', error);
      alert('Erro inesperado');
    }
  };

  return (
    <>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Usuário</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    </>
  );
}

export default LoginForm;
