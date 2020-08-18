import React from 'react';
import { FaHome } from 'react-icons/fa';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <FaHome size={24} />
    </Container>
  );
};

export default Menu;
