import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CreateForm from "./CreateForm";

const meta = {
  title: "Pages/Posts/게시글 작성 페이지",
  component: CreateForm,
} satisfies Meta<typeof CreateForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    action: fn(),
  },
};
