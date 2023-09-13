// Counter.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('increments and decrements the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);

  expect(screen.getByText(/Count:/i)).toHaveTextContent('Count: 0');

  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count:/i)).toHaveTextContent('Count: 1');

  fireEvent.click(decrementButton);
  expect(screen.getByText(/Count:/i)).toHaveTextContent('Count: 0');
});
