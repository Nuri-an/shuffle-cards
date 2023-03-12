import React from 'react';
import { render } from '@testing-library/react';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

export function renderWithTheme(children: React.ReactNode) {
  const Wrapper = (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  );

  render(Wrapper);
}
