import { fireEvent, screen } from '@testing-library/react';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { renderWithTheme } from 'src/utils/functions/tests';
import Input from '.';

describe('Input Component', () => {
  const registerMockFn: UseFormRegister<any> = () => {
    return {} as UseFormRegisterReturn<any>;
  };

  it('should render a component', () => {
    renderWithTheme(<Input placeholder="" name="" register={registerMockFn} />);
    const inputContainer = screen.getByTestId('input-container');
    expect(inputContainer).toBeInTheDocument();
  });

  it('should render a correctly value', () => {
    renderWithTheme(
      <Input placeholder="" name="test" register={registerMockFn} />,
    );
    const input = screen.getByTestId('input');
    const inputValue = 'This is a test';
    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });
    expect(screen.getByTestId('input')).toHaveValue(inputValue);
  });
});
