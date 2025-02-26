import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Header } from "./Header";

/**
 * **Header Component Storybook**
 *
 * This Storybook file documents the `Header` component, showcasing its different variations.
 * The `Header` component displays a navigation bar with optional login/logout buttons.
 *
 * ## Storybook Controls:
 * - **User state** can be toggled to test logged-in vs logged-out behavior.
 * - **Event handlers (`onLogin`, `onLogout`, `onCreateAccount`)** are simulated using `fn()`.
 *
 * @file Header.stories.tsx
 * @author LF
 */

const meta: Meta<typeof Header> = {
  title: "Components/Header", // ✅ Updated title to match the assignment
  component: Header,
  tags: ["autodocs"], // ✅ Keep this for automatic documentation
  parameters: {
    layout: "fullscreen", // ✅ Keeping 'fullscreen' from original
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Logged In Header**
 * - Displays a logged-in user with a logout button.
 */
export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

/**
 * **Logged Out Header**
 * - Displays login and sign-up buttons.
 */
export const LoggedOut: Story = {
  args: {
    user: undefined,
  },
};
