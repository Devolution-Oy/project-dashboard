import { render, screen } from '@testing-library/react';
import DesignList from './DesignList';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders learn DesignList', () => {
  render(<DesignList/>);
  const Item = screen.getByTestId('List');
  expect(Item).toBeInTheDocument();
});