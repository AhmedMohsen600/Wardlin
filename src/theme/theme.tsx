import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your other theme configurations...

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          // Global styles go here
          html: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          },
        },
      },
    },
  },
});

export default theme;
