import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Portfolio/i);
  expect(headingElement).toBeInTheDocument();
});
