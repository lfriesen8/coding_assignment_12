import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TechnicalSkills: Story = {
  render: () => <Table type="technical" />,
};

export const PracticalSkills: Story = {
  render: () => <Table type="practical" />,
};
