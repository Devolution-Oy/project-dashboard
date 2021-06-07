import { render, screen } from '@testing-library/react';
import DesignProjectItem from './DesignProjectItem';

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

test('renders learn react link', () => {
  render(<DesignProjectItem/>);
  const DesignItem = screen.getByTestId('List');
  expect(DesignItem).toBeInTheDocument();
});