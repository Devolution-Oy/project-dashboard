import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
  const email = screen.getByPlaceholderText(/email/i);
  expect(email).toBeInTheDocument();
  const password = screen.getByPlaceholderText(/password/i);
  expect(password).toBeInTheDocument();
  const submit = screen.getByTestId(/submit/i);
  expect(submit).toBeInTheDocument();
});