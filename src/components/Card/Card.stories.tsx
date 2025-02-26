import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

/**
 * **Card Component - Storybook**
 *
 * Showcases different variations of the `Card` component.
 */

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    buttonLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Card**
 */
export const Default: Story = {
  args: {
    title: "Storybook Card",
    description: "This is a reusable card component.",
    image: "https://via.placeholder.com/300x180",
    buttonLabel: "Click Me",
  },
};

/**
 * **Card Without Image**
 */
export const NoImage: Story = {
  args: {
    title: "Text-Only Card",
    description: "This card does not have an image.",
  },
};
