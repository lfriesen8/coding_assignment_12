import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown with options', () => {
    render(
      <Dropdown options={['Option 1', 'Option 2']} defaultValue="Option 1" />
    );
    expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
  });

  test('changes value when a new option is selected', () => {
    const onChangeMock = jest.fn();
    render(
      <Dropdown options={['Option 1', 'Option 2']} onChange={onChangeMock} />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Option 2' } });
    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });

  test('renders empty dropdown without errors', () => {
    render(<Dropdown options={[]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
