import type { Meta, StoryObj } from "@storybook/react";
import UserInfo from ".";

const meta = {
  title: "Components/UserInfo",
  component: UserInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof UserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logout: Story = {
  args: {},
};

export const Login: Story = {
  args: {
    user: {
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
    },
  },
};
