import React from 'react';
import Header from '../components/Header';

import Tabs from '../components/Tabs';

const AppProvider: React.FC = ({ children }) => (
  <>
    <Header />
    <Tabs />
    {children}
  </>
);

export default AppProvider;
