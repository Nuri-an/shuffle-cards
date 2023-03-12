import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { defaultTheme } from 'src/styles/theme';
import { HexToRgb } from 'src/utils/functions/converts';
import { renderWithTheme } from 'src/utils/functions/tests';
import Button from '.';

describe('Button Component', () => {
  const primaryColor = defaultTheme.colors.brand.primary;
  const secondaryColor = defaultTheme.colors.brand.secondary;

  it('should render a component', () => {
    renderWithTheme(<Button bgColor={primaryColor} onClick={() => {}} />);
    const primaryButton = screen.getByTestId('button');
    expect(primaryButton).toBeInTheDocument();
  });

  it('should be allow click', () => {
    renderWithTheme(<Button bgColor={primaryColor} onClick={() => {}} />);
    const primaryButton = screen.getByTestId('button');
    userEvent.click(primaryButton);
    expect(primaryButton).toBeInTheDocument();
  });

  it('should render a button with text', () => {
    const buttonText = 'Button Text';
    renderWithTheme(
      <Button bgColor={primaryColor} onClick={() => {}}>
        {buttonText}
      </Button>,
    );
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    const primaryButton = screen.getByTestId('button');
    expect(primaryButton).toBeInTheDocument();
  });

  it('should render a button with primary color', () => {
    renderWithTheme(<Button bgColor={primaryColor} onClick={() => {}} />);
    const primaryButton = screen.getByTestId('button');
    expect(primaryButton).toBeInTheDocument();
    expect(getComputedStyle(primaryButton).backgroundColor).toBe(
      HexToRgb(primaryColor),
    );
  });

  it('should render a button with secondary color', () => {
    renderWithTheme(<Button bgColor={secondaryColor} onClick={() => {}} />);
    const secondaryButton = screen.getByTestId('button');
    expect(secondaryButton).toBeInTheDocument();
    expect(getComputedStyle(secondaryButton).backgroundColor).toBe(
      HexToRgb(secondaryColor),
    );
  });
});
