import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiUser } from 'react-icons/fi';

import { ListItemText, ListSubheader, Container } from './styles';

const Product: React.FC = () => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Pedidos aguardando retirada</ListSubheader>}
    >
      <ListItem
        style={{ borderBottom: '2px solid #dddddd', cursor: 'pointer' }}
      >
        <Container>
          <FiUser size={20} />
          <ListItemText primary="BUDWEISER" secondary="LATA 473ML CX C/12" />
          <span>R$ 15,49</span>
        </Container>
      </ListItem>
    </List>
  );
};

export default Product;
