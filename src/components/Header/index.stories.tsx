import type { Meta, StoryObj } from "@storybook/react";
import MaxWidthDecorator from "../decorator/MaxWidthDecorator";
import Header from "./index";

const meta = {
  title: "Components/Header",
  component: Header,
  decorators: [(story) => <MaxWidthDecorator>{story()}</MaxWidthDecorator>],
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { title: "Home" },
} satisfies Story;
