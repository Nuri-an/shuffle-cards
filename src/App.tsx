import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';
import store from './redux/store';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
