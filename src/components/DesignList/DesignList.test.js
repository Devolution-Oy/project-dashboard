import { render, screen } from '@testing-library/react';
import DesignList from './DesignList';

test('renders learn DesignList', () => {
  render(<DesignList/>);
  const Item = screen.getByTestId('RowItem');
  expect(Item).toBeInTheDocument();
});