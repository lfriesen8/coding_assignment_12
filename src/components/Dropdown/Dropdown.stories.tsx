import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

/**
 * **Dropdown Component - Storybook**
 *
 * Showcases different variations of the `Dropdown` component.
 */

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    defaultValue: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Dropdown**
 */
export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    defaultValue: "Option 1",
  },
};

/**
 * **Empty Dropdown**
 */
export const Empty: Story = {
  args: {
    options: [],
    defaultValue: "",
  },
};
