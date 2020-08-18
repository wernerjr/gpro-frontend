import React, { useCallback } from 'react';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const { signOut, user } = useAuth();
  console.log(user);
  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <h1>Home</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Container>
  );
};

export default Home;
