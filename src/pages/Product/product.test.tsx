import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react'
import axios from 'axios';
import Products from './index';

const mockAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios');

describe('Testes da página de produtos', () => {
  let products:any[] = [];
  beforeEach(() => {
    products = [{
      id: '1',
      ambevCode: 1,
      name: "Skol",
      description: "lata",
      imageURL: "http://google.com",
      alcoholic: true,
      price: 2.3,
      amount: 0,
     }, {
      id: '2',
      ambevCode: 2,
      name: "Budweiser",
      description: "lata",
      imageURL: "http://google.com",
      alcoholic: true,
      price: 3.3,
      amount: 0,
     }];
    const response = { data: products };
    mockAxios.get.mockResolvedValue({ data: response });
  })

  test('carregar produtos', async () => {
    // Act
    const { getByText , getByTestId } = render(<Products />);

    // Assert
    const alcoholicList = await waitForElement(() => getByTestId("lista-alcoolicos"));
    const alcoholicAmount = products.filter(p => p.alcoholic);
    expect(alcoholicList.children).toHaveLength(alcoholicAmount.length + 1);

    const skol = getByText(products[0].name);
    expect(skol).not.toBeNull();
  });

  test('incrementar produto', async () => {
    // Arrange
    const { getByTestId } = render(<Products />);


    // Act
    const alcoholicList = await waitForElement(() => getByTestId("lista-alcoolicos"));
    //Como funciona os selectors: https://www.w3schools.com/cssref/css_selectors.asp
    const incrementButton = alcoholicList.children[1].querySelector("[aria-label='increment']");
    const amount = alcoholicList.children[1].querySelector("[aria-label='amount']");
    
    expect(incrementButton).not.toBeNull();
    if (incrementButton !== null)
    {
      fireEvent.click(incrementButton);

      // Assert
      expect(amount?.textContent).toBe("1");
    }
  });

  test('confirmar pedido', async () => {
    // Act
    const { getByText } = render(<Products />);

    const submitButton = await waitForElement(() => getByText("Confirmar Pedido"));
    fireEvent.click(submitButton);

    // Assert
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith('/Order/SaveOrder', { products: [], totalPrice: 0 });
  });
});
