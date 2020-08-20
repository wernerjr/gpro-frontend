import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiUser } from 'react-icons/fi';

import {
  ListItemText,
  ListSubheader,
  Container,
  Button,
  ButtonContainer,
} from './styles';

const Product: React.FC = () => {
  return (
    <>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        aria-labelledby="subheader-alcoolico"
        subheader={<ListSubheader>Alcoólicos</ListSubheader>}
      >
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container last>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
      </List>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        aria-labelledby="subheader-nao-alcoolico"
        subheader={<ListSubheader>Não alcoólicos</ListSubheader>}
      >
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container last>
            <FiUser size={20} />
            <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
            <span>R$ 15,49</span>
          </Container>
        </ListItem>
      </List>
      <ButtonContainer>
        <Button>Confirmar Pedido</Button>
      </ButtonContainer>
    </>
  );
};

export default Product;
