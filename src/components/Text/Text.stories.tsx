import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

/**
 * **Text Component - Storybook**
 *
 * Showcases different variations of the `Text` component:
 * - **Default**: Normal text.
 * - **Bold**: Text with bold styling.
 * - **Italic**: Text with italic styling.
 * - **Colored**: Custom text color.
 * - **Different Sizes**: Small, Medium, Large.
 */

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Text**
 */
export const Default: Story = {
  args: {
    children: 'This is default text',
  },
};

/**
 * **Bold Text**
 */
export const Bold: Story = {
  args: {
    children: 'This is bold text',
    bold: true,
  },
};

/**
 * **Italic Text**
 */
export const Italic: Story = {
  args: {
    children: 'This is italic text',
    italic: true,
  },
};

/**
 * **Colored Text**
 */
export const Colored: Story = {
  args: {
    children: 'This is colored text',
    color: '#ff5733',
  },
};

/**
 * **Different Sizes**
 */
export const Small: Story = {
  args: {
    children: 'This is small text',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'This is large text',
    size: 'large',
  },
};
