import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupStore } from 'src/redux/rootReducer';
import {
  renderWithProviders,
  renderWithReduxPreloader,
} from 'src/utils/functions/tests';
import Login from '.';

describe('Login Screen', () => {
  it('should render a initial components', () => {
    renderWithProviders(<Login />);
    const loginScreen = screen.getByTestId('login');
    const loginImg = screen.getByTestId('login-img');
    const loginInput = screen.getByTestId('input');

    expect(loginScreen).toBeInTheDocument();
    expect(loginImg).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
  });

  it('should not render the button initially', () => {
    renderWithProviders(<Login />);
    const loginButton = screen.getByTestId('login-button');
    expect(getComputedStyle(loginButton).visibility).toBe('hidden');
    expect(getComputedStyle(loginButton).opacity).toBe('0');
  });

  it('should render the button is visible when showing', async () => {
    renderWithProviders(<Login />);
    const loginInput = screen.getByTestId('input');
    userEvent.type(loginInput, 'This is a test');

    await waitFor(() => {
      const loginButton = screen.getByTestId('login-button');
      expect(getComputedStyle(loginButton).visibility).toBe('visible');
      expect(getComputedStyle(loginButton).opacity).toBe('1');
    });
  });

  it('should render the button when type in input', async () => {
    renderWithProviders(<Login />);
    const loginInput = screen.getByTestId('input');
    userEvent.type(loginInput, 'This is a test');

    await waitFor(() => {
      expect(screen.getByTestId('login-button')).toBeInTheDocument();
    });
  });

  it('should return error message when click button and input empty', async () => {
    renderWithProviders(<Login />);
    const loginButton = screen.getByTestId('button');
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByTestId('login-error')).toBeVisible();
    });
  });

  it('should not return error message when click button and input thing', async () => {
    renderWithProviders(<Login />);
    const loginInput = screen.getByTestId('input');
    await userEvent.type(loginInput, 'This is a test');

    const loginButton = screen.getByTestId('button');
    await userEvent.click(loginButton);

    const loginError = screen.queryByTestId('login-error');
    expect(loginError).toBeNull();
  });

  it('should login user when click button', async () => {
    const userName = 'Test User';
    const previousState: SessionType = {
      isLogged: false,
      user: '',
    };
    const store = setupStore({ user: previousState });

    renderWithReduxPreloader(<Login />, {
      preloadedState: {
        user: previousState,
      },
      store,
    });

    const loginInput = screen.getByTestId('input');
    await userEvent.type(loginInput, userName);

    const loginButton = screen.getByTestId('button');
    await userEvent.click(loginButton);

    expect(JSON.stringify(store.getState().user)).toBe(
      JSON.stringify({
        isLogged: true,
        user: userName,
      }),
    );
  });
});
