import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

/**
 * **Img Component - Storybook**
 *
 * Showcases different variations of the `Img` component.
 */

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Image**
 */
export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    width: 150,
    height: 150,
    borderRadius: "5px",
  },
};

/**
 * **Rounded Image**
 */
export const Rounded: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Rounded Image",
    width: 150,
    height: 150,
    borderRadius: "50%",
  },
};

/**
 * **Full-Width Image**
 */
export const FullWidth: Story = {
  args: {
    src: "https://via.placeholder.com/600x300",
    alt: "Full-Width Image",
    width: "100%",
    height: 300,
    borderRadius: "0px",
  },
};
