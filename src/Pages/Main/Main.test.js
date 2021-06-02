import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders learn ListItem', () => {
  render(<Main/>);
  const ListItem = screen.getByTestId('List');
  expect(ListItem).toBeInTheDocument();
  const Footer = screen.getByText(/Find us/i);
  expect(Footer).toBeInTheDocument();
  const Header = screen.getByAltText(/LogoDevolution/i);
  expect(Header).toBeInTheDocument();
});