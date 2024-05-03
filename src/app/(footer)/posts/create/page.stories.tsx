import type { Meta, StoryObj } from "@storybook/react";
import CreatePostPage from "./page";

const meta = {
  title: "Pages/Posts/게시글 작성 페이지",
  component: CreatePostPage,
} satisfies Meta<typeof CreatePostPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
