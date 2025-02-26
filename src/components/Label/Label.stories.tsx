import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

/**
 * **Label Component - Storybook**
 *
 * This Storybook file showcases the `Label` component with different states.
 *
 * - **Default Label**: Normal label with text.
 * - **Disabled Label**: Greyed-out, non-clickable label.
 * - **Associated Label**: Connected to an input field.
 */

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Label**
 * - Normal label with text.
 */
export const Default: Story = {
  args: {
    text: "Label Text",
  },
};

/**
 * **Disabled Label**
 * - Greyed-out label.
 */
export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    disabled: true,
  },
};

/**
 * **Associated Label**
 * - Connected to an input field.
 */
export const Associated: Story = {
  args: {
    text: "Label for Input",
    htmlFor: "input-id",
  },
};
