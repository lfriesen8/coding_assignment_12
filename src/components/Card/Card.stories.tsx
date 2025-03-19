import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

/**
 * **Card Component - Storybook**
 *
 * Showcases different variations of the `Card` component.
 */

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Card**
 */
export const Default: Story = {
  args: {
    title: 'PK SPEAKERS',
    description: 'White PK 15 Speakers',
    image:
      'https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/16/310/g310YU2MW-F.jpg',
    buttonLabel: 'More info',
    onButtonClick: () => alert('Button clicked!'),
  },
};

/**
 * **Card Without Image**
 */
export const NoImage: Story = {
  args: {
    title: 'Out of stock',
    description: 'Sorry about that.',
  },
};
