import { render, screen } from '@testing-library/react';
import DesignItem from './DesignItem';

test('Title, budget and task are rendered from string prop', () => {
  render(
    <div>
      <DesignItem title={'Hello'} budget={'999'} task={'task1'} />
      <DesignItem title={'Second'} budget={'998'} task={'task2'} />
    </div>);
  
  const title1 = screen.getByText(/Hello/i);
  expect(title1).toBeInTheDocument();
  const title2 = screen.getByText(/Second/i);
  expect(title2).toBeInTheDocument();
  const budget1 = screen.getByText(/999/i);
  expect(budget1).toBeInTheDocument();
  const budget2 = screen.getByText(/998/i);
  expect(budget2).toBeInTheDocument();
  const task1 = screen.getByText(/task1/i);
  expect(task1).toBeInTheDocument();
  const task2 = screen.getByText(/task2/i);
  expect(task2).toBeInTheDocument();
});