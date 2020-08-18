import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(() => {
    signIn({ email: 'Teste', password: '123456' });
    history.push('/home');
  }, [signIn]);

  return (
    <Container>
      <h1>Login</h1>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </Container>
  );
};

export default Home;
