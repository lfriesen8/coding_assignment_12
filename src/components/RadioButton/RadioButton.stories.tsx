import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react"; // ✅ We need state for selection
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
 * **Standalone Unchecked Radio Button**
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
 * **Standalone Checked Radio Button**
 */
export const Checked: Story = {
  args: {
    label: "Selected Option",
    name: "example",
    value: "option2",
    checked: true,
  },
};

/**
 * **Radio Group (Multiple Options)**
 *
 * Demonstrates that only one radio button can be selected at a time.
 */
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1"); // ✅ Track selected option

    return (
      <div>
        <RadioButton
          label="Option 1"
          name="radioGroup"
          value="option1"
          checked={selected === "option1"}
          onChange={setSelected} // ✅ Updates state
        />
        <RadioButton
          label="Option 2"
          name="radioGroup"
          value="option2"
          checked={selected === "option2"}
          onChange={setSelected} // ✅ Updates state
        />
      </div>
    );
  },
};
