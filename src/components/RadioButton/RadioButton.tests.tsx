import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(<RadioButton label="Option 1" name="test" value="1" />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });

  test('changes value when clicked', () => {
    const onChangeMock = jest.fn();
    render(
      <RadioButton
        label="Option 2"
        name="test"
        value="2"
        onChange={onChangeMock}
      />
    );

    const radio = screen.getByLabelText('Option 2');
    fireEvent.click(radio);

    expect(onChangeMock).toHaveBeenCalledWith('2');
  });

  test('renders unchecked by default', () => {
    render(<RadioButton label="Unchecked" name="test" value="3" />);
    expect(screen.getByLabelText('Unchecked')).not.toBeChecked();
  });
});
