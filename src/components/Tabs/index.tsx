import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import mercadotechTheme from '../../styles/materialTheme';

import { MaterialTabs, MaterialTab } from './styles';

const Tabs: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = useCallback(
    (_event, newValue) => {
      setValue(newValue);
      history.push(newValue === 0 ? '/' : '/order');
    },
    [history],
  );

  return (
    <MuiThemeProvider theme={mercadotechTheme}>
      <MaterialTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <MaterialTab label="Produtos" />
        <MaterialTab label="Meus Pedidos" />
      </MaterialTabs>
    </MuiThemeProvider>
  );
};

export default Tabs;
