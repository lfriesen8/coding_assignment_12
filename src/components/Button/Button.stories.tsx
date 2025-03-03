import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

/**
 * **Button Component Storybook**
 *
 * This Storybook file documents the `Button` component, showcasing its different variations.
 * The `Button` component supports various states including:
 * - **Primary**: A highlighted button with primary styling.
 * - **Secondary**: A default button without primary styling.
 * - **Large & Small**: Different button sizes.
 * - **Disabled**: A button that is visually greyed out and non-clickable.
 *
 * ## Storybook Controls:
 * - The **background color** can be modified dynamically in Storybook.
 * - Click actions are recorded in the Storybook Actions panel.
 *
 * 
 * Liam Friesen
 */

// Storybook metadata configuration
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    /**
     * Centers the component inside the Storybook preview.
     * More info: https://storybook.js.org/docs/configure/story-layout
     */
    layout: "centered",
  },
  tags: ["autodocs"], // Enables automatic documentation generation
  argTypes: {
    /**
     * Allows users to change the background color dynamically from Storybook.
     */
    backgroundColor: { control: "color" },
  },
  /**
   * Spy function to track `onClick` events in Storybook's Actions panel.
   * More info: https://storybook.js.org/docs/essentials/actions
   */
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Primary Button**
 * - This is the default button with **primary styling**.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
  },
};

/**
 * **Secondary Button**
 * - This is a standard button without the primary color.
 */
export const Secondary: Story = {
  args: {
    label: "Secondary Button",
  },
};

/**
 * **Large Button**
 * - This button is displayed in a larger size.
 */
export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

/**
 * **Small Button**
 * - This button is displayed in a smaller size.
 */
export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

/**
 * **Disabled Button**
 * - This button is greyed out and non-clickable.
 */
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
