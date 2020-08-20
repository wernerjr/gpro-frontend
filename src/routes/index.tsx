import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Product from '../pages/Product';
import Order from '../pages/Order';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Product} />

    <Route path="/order" component={Order} isPrivate />
  </Switch>
);

export default Routes;
