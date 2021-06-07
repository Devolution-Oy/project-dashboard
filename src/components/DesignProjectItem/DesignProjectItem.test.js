import { render, screen } from '@testing-library/react';
import DesignProjectItem from './DesignProjectItem';

<DesignItem header='Item header text' />;

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

test('renders learn react link', () => {
  render(<DesignProjectItem/>);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
  const DesignItem = screen.getByTestId('List');
  expect(DesignItem).toBeInTheDocument();
});