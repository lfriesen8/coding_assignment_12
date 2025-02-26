import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";

/**
 * **HeroImage Component - Storybook**
 *
 * Showcases different variations of the `HeroImage` component.
 */

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    height: { control: "text" },
    overlayColor: { control: "color" },
    text: { control: "text" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Default Hero Image**
 */
export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400",
    alt: "Hero Image",
    height: "400px",
    overlayColor: "rgba(0,0,0,0.5)",
    text: "Welcome to Storybook",
    textColor: "#fff",
  },
};

/**
 * **Hero Image Without Text**
 */
export const NoText: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400",
    alt: "Hero Image",
    height: "400px",
    overlayColor: "rgba(0,0,0,0.3)",
  },
};
