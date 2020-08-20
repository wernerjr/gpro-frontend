import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiChevronRight } from 'react-icons/fi';

import { ListItemText, ListSubheader, Container } from './styles';

const Order: React.FC = () => {
  return (
    <>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        subheader={<ListSubheader>Pedidos aguardando retirada</ListSubheader>}
      >
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <ListItemText
              primary="Retirar entre 30 e 31 de agosto"
              secondary="4 itens / R$ 244,00"
            />
            <FiChevronRight size={20} />
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container last>
            <ListItemText
              primary="Retirar entre 30 e 31 de agosto"
              secondary="4 itens / R$ 244,00"
            />
            <FiChevronRight size={20} />
          </Container>
        </ListItem>
      </List>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        subheader={<ListSubheader>Pedidos já retirados</ListSubheader>}
      >
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container>
            <ListItemText
              primary="Retirar entre 30 e 31 de agosto"
              secondary="4 itens / R$ 244,00"
            />
            <FiChevronRight size={20} />
          </Container>
        </ListItem>
        <ListItem style={{ padding: 0, cursor: 'pointer' }}>
          <Container last>
            <ListItemText
              primary="Retirar entre 30 e 31 de agosto"
              secondary="4 itens / R$ 244,00"
            />
            <FiChevronRight size={20} />
          </Container>
        </ListItem>
      </List>
    </>
  );
};

export default Order;
