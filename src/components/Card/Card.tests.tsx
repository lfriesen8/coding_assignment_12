import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card with title and description', () => {
    render(
      <Card title="Test Card" description="This is a test description." />
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });

  test('renders card with image', () => {
    render(
      <Card
        title="Image Card"
        description="This card has an image."
        image="test.jpg"
      />
    );
    expect(screen.getByAltText('Image Card')).toBeInTheDocument();
  });

  test('calls button click handler', () => {
    const onClickMock = jest.fn();
    render(
      <Card
        title="Clickable Card"
        description="Click the button."
        buttonLabel="Click Me"
        onButtonClick={onClickMock}
      />
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
