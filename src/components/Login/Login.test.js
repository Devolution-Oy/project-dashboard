import { render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
  const email = screen.getByPlaceholderText(/Email address/i);
  expect(email).toBeInTheDocument();
  const password = screen.getByPlaceholderText(/Password/i);
  expect(password).toBeInTheDocument();
  const btnLogin = document.getElementById('btn_submit');
  expect(document.getElementById('password')).not.toBeTruthy();
  Simulate.click(btnLogin);
});