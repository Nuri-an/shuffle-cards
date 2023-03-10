import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  render(<App />);
  it('should contain initial pattern text', () => {
    expect(screen.getByText('Hello Word')).toBeTruthy();
  });
});
