import { render, screen } from '@testing-library/react';
import Main from './Main';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders Main', () => {
  render(<Main/>);
  const DesignList = screen.getByTestId('List');
  expect(DesignList).toBeInTheDocument();
  const Footer = screen.getByText(/Find us/i);
  expect(Footer).toBeInTheDocument();
  const Header = screen.getByAltText(/LogoDevolution/i);
  expect(Header).toBeInTheDocument();
});