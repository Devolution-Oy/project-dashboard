import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders learn Item', () => {
  render(<ListItem/>);
  const Item = screen.getByTestId('RowItem');
  expect(Item).toBeInTheDocument();
});