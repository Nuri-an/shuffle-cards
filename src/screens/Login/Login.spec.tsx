import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'src/utils/functions/tests';
import Login from '.';

describe('Button Component', () => {
  it('should render a initial components', () => {
    renderWithTheme(<Login />);
    const loginScreen = screen.getByTestId('login');
    const loginImg = screen.getByTestId('login-img');
    const loginInput = screen.getByTestId('login-input');

    expect(loginScreen).toBeInTheDocument();
    expect(loginImg).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
  });

  it('should not render the button initially', () => {
    renderWithTheme(<Login />);
    const loginButton = screen.getByTestId('login-button');
    expect(getComputedStyle(loginButton).visibility).toBe('hidden');
    expect(getComputedStyle(loginButton).opacity).toBe('0');
  });

  it('should render the button is visible when showing', async () => {
    renderWithTheme(<Login />);
    const loginInput = screen.getByTestId('login-input');
    const inputValue = 'This is a test';
    userEvent.type(loginInput, inputValue);
    await waitFor(() => {
      const loginButton = screen.getByTestId('login-button');
      expect(getComputedStyle(loginButton).visibility).toBe('visible');
      expect(getComputedStyle(loginButton).opacity).toBe('1');
    });
  });

  it('should render the button when type in input', async () => {
    renderWithTheme(<Login />);
    const loginInput = screen.getByTestId('login-input');
    const inputValue = 'This is a test';
    userEvent.type(loginInput, inputValue);
    await waitFor(() => {
      expect(screen.getByTestId('login-button')).toBeInTheDocument();
    });
  });

  /* it('should return error message when click button and input empty', async () => {
    renderWithTheme(<Login />);
    const loginButton = screen.getByTestId('login-button');
    loginButton.style.visibility = 'visible';
    loginButton.style.opacity = '1';
    userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByTestId('login-error')).toBeInTheDocument();
    });
  }); */

  it('should not return error message when click button and input thing', () => {
    renderWithTheme(<Login />);
    const loginButton = screen.getByTestId('login-button');
    const loginInput = screen.getByTestId('login-input');
    const inputValue = 'This is a test';
    userEvent.type(loginInput, inputValue);
    userEvent.click(loginButton);
    const loginError = screen.queryByTestId('login-error');
    expect(loginError).toBeNull();
  });
});
