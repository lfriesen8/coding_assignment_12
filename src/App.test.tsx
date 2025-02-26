import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Component Library heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Component Library/i);
  expect(headingElement).toBeInTheDocument();
});
