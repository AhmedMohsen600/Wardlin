import { ThemeProvider } from '@mui/system';
import Layout from './layout/main';
import PageRoutes from './router/pages-routes';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PageRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
