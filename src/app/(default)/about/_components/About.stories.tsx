import type { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const meta = {
  title: "Pages/About",
  component: About,
} satisfies Meta<typeof About>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    primary: true,
  },
} satisfies Story;
