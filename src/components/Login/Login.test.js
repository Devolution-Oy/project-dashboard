import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
  const email = screen.getByPlaceholderText(/Email address/i);
  expect(email).toBeInTheDocument();
  const password = screen.getByPlaceholderText(/••••••••••/i);
  expect(password).toBeInTheDocument();
  const submit = screen.getByTestId(/submit/i);
  expect(submit).toBeInTheDocument();
});