import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import reduxStore from 'src/redux/store';
import { AppStore, RootState, setupStore } from 'src/redux/rootReducer';
import { PreloadedState } from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithTheme(children: React.ReactNode) {
  const Wrapper = (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  );

  render(Wrapper);
}

export function renderWithProviders(children: React.ReactNode) {
  const Wrapper = (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={reduxStore}>{children}</Provider>
    </ThemeProvider>
  );

  render(Wrapper);
}

export function renderWithReduxPreloader(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
