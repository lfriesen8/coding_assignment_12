import { render, screen } from '@testing-library/react';
import { Header } from './Header';

/**
 * **Header Component Tests**
 */
describe('Header Component', () => {
  test('Header renders with correct text', () => {
    render(<Header title="Test Header" />);
    expect(screen.getByText('Test Header')).toBeVisible();
  });

  test('Displays correct user greeting when logged in', () => {
    render(<Header user={{ name: 'John' }} />);
    expect(screen.getByText('Welcome, John!')).toBeVisible();
  });
});
