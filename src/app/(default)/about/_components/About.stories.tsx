import type { Meta, StoryObj } from "@storybook/react";
import About from "./About";
import MaxWidthDecorator from "@/components/decorator/MaxWidthDecorator";

const meta = {
  title: "Pages/About",
  component: About,
  decorators: [(story) => <MaxWidthDecorator>{story()}</MaxWidthDecorator>],
} satisfies Meta<typeof About>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    primary: true,
  },
} satisfies Story;
