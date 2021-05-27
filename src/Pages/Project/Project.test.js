import { render, screen } from '@testing-library/react';
import Project from './Project';

test('renders learn react link', () => {
  render(<Project/>);
  const linkElement = screen.getByText(/Project/i);
  expect(linkElement).toBeInTheDocument();
});