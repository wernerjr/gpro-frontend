import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiChevronRight } from 'react-icons/fi';
import { apiOrder } from '../../services/apiClient';

import { ListItemText, ListSubheader, Container } from './styles';

interface OrderProduct {
  productAmbevCode: number;
  amount: number;
  price: number;
}

interface Order {
  products: OrderProduct[];
  totalPrice: number;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    apiOrder.get('Order/GetOrders').then((response) => {
      setOrders(response.data.data);
    });
  }, []);

  return (
    <>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        subheader={<ListSubheader>Pedidos aguardando retirada</ListSubheader>}
      >
        {orders.map((order) => (
          <ListItem
            key={order.totalPrice}
            style={{ padding: 0, cursor: 'pointer' }}
          >
            <Container>
              <ListItemText
                primary="Retirar entre 30 e 31 de agosto"
                secondary={`${order.products.length} itens / R$ ${order.totalPrice}`}
              />
              <FiChevronRight size={20} />
            </Container>
          </ListItem>
        ))}
      </List>
      <List
        style={{ background: '#ffffff' }}
        component="nav"
        subheader={<ListSubheader>Pedidos já retirados</ListSubheader>}
      />
    </>
  );
};

export default Order;
