import { render, screen } from '@testing-library/react';
import DesignItem from './DesignItem';

test('renders learn react link', () => {
  render(<DesignItem/>);
  const linkElement = screen.getByText(/Design/i);
  expect(linkElement).toBeInTheDocument();
});