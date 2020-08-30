import axios from 'axios';

export const apiProduct = axios.create({
  baseURL: 'https://localhost:44321',
});

export const apiOrder = axios.create({
  baseURL: 'https://localhost:44320',
});
