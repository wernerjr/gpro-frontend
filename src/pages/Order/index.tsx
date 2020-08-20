import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiChevronRight } from 'react-icons/fi';

import { ListItemText, ListSubheader } from './styles';

const Order: React.FC = () => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Pedidos aguardando retirada</ListSubheader>}
    >
      <ListItem
        style={{ borderBottom: '2px solid #dddddd', cursor: 'pointer' }}
      >
        <ListItemText
          primary="Retirar entre 30 e 31 de agosto"
          secondary="4 itens / R$ 244,00"
        />
        <FiChevronRight size={20} />
      </ListItem>
    </List>
  );
};

export default Order;
