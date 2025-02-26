import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

/**
 * **RadioButton Component - Storybook**
 *
 * Showcases different variations of the `RadioButton` component.
 */

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Unchecked Radio Button**
 */
export const Default: Story = {
  args: {
    label: "Option 1",
    name: "example",
    value: "option1",
    checked: false,
  },
};

/**
 * **Checked Radio Button**
 */
export const Checked: Story = {
  args: {
    label: "Selected Option",
    name: "example",
    value: "option2",
    checked: true,
  },
};
