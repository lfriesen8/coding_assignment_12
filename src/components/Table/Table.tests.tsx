import { render, screen } from '@testing-library/react';
import { Table } from './index';

describe('Table Component', () => {
  test('renders technical skills correctly', () => {
    render(<Table type="technical" />);

    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Computer Building & Troubleshooting')).toBeInTheDocument();
    expect(screen.getByText('10+ years')).toBeInTheDocument();
  });

  test('renders practical skills correctly', () => {
    render(<Table type="practical" />);

    expect(screen.getByText('DJ')).toBeInTheDocument();
    expect(screen.getByText('Music Producer')).toBeInTheDocument();
    expect(screen.getByText('9 years')).toBeInTheDocument();
    expect(screen.getByText('Lifetime')).toBeInTheDocument();
  });
});
