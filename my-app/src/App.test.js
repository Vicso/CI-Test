import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dummy App To test docker on Github Actions CI/i);
  expect(linkElement).toBeInTheDocument();
});
