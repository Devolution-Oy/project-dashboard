import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders ListItem', () => {
  render(<Main/>);
  const DesignList = screen.getByTestId('List');
  expect(DesignList).toBeInTheDocument();
  const Footer = screen.getByText(/Find us/i);
  expect(Footer).toBeInTheDocument();
  const Header = screen.getByAltText(/LogoDevolution/i);
  expect(Header).toBeInTheDocument();
});