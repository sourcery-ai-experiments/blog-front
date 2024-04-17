import type { Meta, StoryObj } from "@storybook/react";
import CreatePostPage from "./page";

const meta = {
  title: "Pages/Posts/Create",
  component: CreatePostPage,
} satisfies Meta<typeof CreatePostPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
