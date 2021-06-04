import { render, screen } from '@testing-library/react';
import DesignProjectItem from './DesignProjectItem';

test('renders learn react link', () => {
  render(<DesignProjectItem/>);
  const linkElement = screen.getByText(/Well said/i);
  expect(linkElement).toBeInTheDocument();
});