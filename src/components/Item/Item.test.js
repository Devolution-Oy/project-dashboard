import { render, screen } from '@testing-library/react';
import Item from './Item';

test('renders learn react link', () => {
  render(<Item/>);
  const linkElement = screen.getByText(/Design/i);
  expect(linkElement).toBeInTheDocument();
});