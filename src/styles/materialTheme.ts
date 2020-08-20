import { createMuiTheme } from '@material-ui/core/styles';

const mercadotechTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ba000d',
      main: '#ba000d',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default mercadotechTheme;
