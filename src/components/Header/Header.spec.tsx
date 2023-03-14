import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupStore } from 'src/redux/rootReducer';
import {
  renderWithProviders,
  renderWithReduxPreloader,
} from 'src/utils/functions/tests';
import Header from '.';

describe('Header Component', () => {
  it('should render a initial components', () => {
    renderWithProviders(<Header />);
    const header = screen.getByTestId('header');
    const HeaderLogo = screen.getByTestId('header-logo');
    const HeaderUser = screen.getByTestId('header-user');
    const logout = screen.getByTestId('logout');

    expect(header).toBeInTheDocument();
    expect(HeaderLogo).toBeInTheDocument();
    expect(HeaderUser).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it('should be showing the logged user name', () => {
    const userName = 'Test User';
    const initialState = { isLogged: true, user: userName };
    renderWithReduxPreloader(<Header />, {
      preloadedState: {
        user: initialState,
      },
    });

    expect(screen.getByText(userName)).toBeInTheDocument();
  });

  it('should be allowed to click logout button', () => {
    renderWithProviders(<Header />);
    const logout = screen.getByTestId('logout');

    userEvent.click(logout);
  });

  it('should logout the user with click on the logout button', async () => {
    const userName = 'Test User';
    const previousState: SessionType = {
      isLogged: true,
      user: userName,
    };
    const store = setupStore({ user: previousState });

    renderWithReduxPreloader(<Header />, {
      preloadedState: {
        user: previousState,
      },
      store,
    });

    expect(screen.getByText(userName)).toBeInTheDocument();

    const logout = screen.getByTestId('logout');
    await userEvent.click(logout);

    expect(JSON.stringify(store.getState().user)).toBe(
      JSON.stringify({
        isLogged: false,
        user: '',
      }),
    );
    expect(screen.queryByText(userName)).toBeNull();
  });
});
