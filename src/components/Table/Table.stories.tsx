import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./index";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Table />, // Showcases adding/removing rows dynamically
};

export const Disabled: Story = {
  render: () => <Table disabled={true} />, // Showcases the table in a disabled state
};
