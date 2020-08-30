import React, { useState, useEffect, useCallback } from 'react';
import { List, ListItem } from '@material-ui/core';
import { FiUser } from 'react-icons/fi';
import { apiProduct, apiOrder } from '../../services/apiClient';

import {
  ListItemText,
  ListSubheader,
  Container,
  Button,
  ButtonContainer,
  ButtonSubmit,
  ListContainer,
} from './styles';

interface Product {
  id: string;
  ambevCode: number;
  name: string;
  description: string;
  imageURL: string;
  alcoholic: boolean;
  price: number;
  amount: number;
}
interface OrderProduct {
  productAmbevCode: number;
  amount: number;
  price: number;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(() => {
    apiProduct.get('Product/GetProducts').then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  const handleIncreaseAmount = useCallback(
    (id) => {
      const listProducts = products;
      const listProduct = listProducts.find((lprod) => lprod.id === id);
      if (listProduct !== undefined) {
        if (listProduct.amount !== undefined) listProduct.amount += 1;
        else listProduct.amount = 1;
        setProducts([...listProducts]);
      }
    },
    [products],
  );

  const handleDencreaseAmount = useCallback(
    (id) => {
      const listProducts = products;
      const listProduct = listProducts.find((lprod) => lprod.id === id);
      if (listProduct !== undefined) {
        if (listProduct.amount !== undefined && listProduct.amount !== 0)
          listProduct.amount -= 1;
        else listProduct.amount = 0;
        setProducts([...listProducts]);
      }
    },
    [products],
  );

  const getTotalPrice = useCallback(() => {
    return products.reduce((a, b: Product) => {
      return a + (b.amount ?? 0) * b.price;
    }, 0);
  }, [products]);

  const formatProducts = useCallback(() => {
    const orderProducts: OrderProduct[] = [];
    products
      .filter((product) => product.amount > 0)
      .forEach((product) => {
        orderProducts.push({
          productAmbevCode: product.ambevCode,
          amount: product.amount,
          price: product.price,
        });
      });

    return orderProducts;
  }, [products]);

  const handleSubmit = useCallback(() => {
    apiOrder.post('/Order/SaveOrder', {
      products: formatProducts(),
      totalPrice: Math.round(getTotalPrice() * 100) / 100,
    });
    getProducts();
  }, [formatProducts, getTotalPrice]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <ListContainer>
        <List
          style={{ background: '#ffffff' }}
          component="nav"
          aria-labelledby="subheader-alcoolico"
          subheader={<ListSubheader>Alcoólicos</ListSubheader>}
        >
          {products.map(
            (product) =>
              product.alcoholic && (
                <ListItem
                  key={product.id}
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  <Container>
                    <img src={product.imageURL} alt={product.name} />
                    <ListItemText
                      primary={product.name.trim()}
                      secondary={`R$ ${product.price}`}
                    />
                    <Button onClick={() => handleDencreaseAmount(product.id)}>
                      -
                    </Button>
                    <span>{product.amount ?? 0}</span>
                    <Button onClick={() => handleIncreaseAmount(product.id)}>
                      +
                    </Button>
                  </Container>
                </ListItem>
              ),
          )}
        </List>
        <List
          style={{ background: '#ffffff' }}
          component="nav"
          aria-labelledby="subheader-nao-alcoolico"
          subheader={<ListSubheader>Não alcoólicos</ListSubheader>}
        >
          {products.map(
            (product) =>
              !product.alcoholic && (
                <ListItem
                  key={product.id}
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  <Container>
                    <img src={product.imageURL} alt={product.name} />
                    <ListItemText
                      primary={product.name}
                      secondary={`R$ ${product.price}`}
                    />
                    <Button onClick={() => handleDencreaseAmount(product.id)}>
                      -
                    </Button>
                    <span>{product.amount ?? 0}</span>
                    <Button onClick={() => handleIncreaseAmount(product.id)}>
                      +
                    </Button>
                  </Container>
                </ListItem>
              ),
          )}
        </List>
      </ListContainer>

      <ButtonContainer>
        <ButtonSubmit onClick={handleSubmit}>Confirmar Pedido</ButtonSubmit>
      </ButtonContainer>
    </>
  );
};

export default Product;
