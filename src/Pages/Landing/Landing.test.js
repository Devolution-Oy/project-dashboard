import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders learn react link', () => {
  render(<Landing/>);
  const header = screen.getByAltText(/LogoDevolution/i);
  expect(header).toBeInTheDocument();
  const footer = screen.getByText(/Find us/i);
  expect(footer).toBeInTheDocument();
  const login = screen.getByText(/Email/i);
  expect(login).toBeInTheDocument();
});
