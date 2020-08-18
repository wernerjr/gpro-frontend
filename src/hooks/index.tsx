import React from 'react';

import { AuthProvider } from './auth';
import Header from '../components/Header';
import Menu from '../components/Menu';

const AppProvider: React.FC = ({ children }) => (
  <>
    <Header />
    <Menu />
    <AuthProvider>{children}</AuthProvider>
  </>
);

export default AppProvider;
