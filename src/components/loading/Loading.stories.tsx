import type { Meta, StoryObj } from "@storybook/react";
import CommonLoading from "./Loading";

const meta = {
  title: "Components/Loading",
  component: CommonLoading,
} satisfies Meta<typeof CommonLoading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
