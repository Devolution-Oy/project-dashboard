import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';

test('renders learn react link', () => {
  render(<SignOut/>);
  const logout = screen.getByTestId('btn_logout');
  expect(logout).toBeInTheDocument();
});