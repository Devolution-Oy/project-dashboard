import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders learn react link', () => {
  render(<Landing/>);
  const linkElement = screen.getByText(/Landing page/i);
  expect(linkElement).toBeInTheDocument();
});
