import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
