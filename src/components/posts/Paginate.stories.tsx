import type { Meta, StoryObj } from "@storybook/react";
import MaxWidthDecorator from "../decorator/MaxWidthDecorator";
import Paginate from "./Paginate";

const meta = {
  title: "Components/Paginate",
  component: Paginate,
  tags: ["autodocs"],
  decorators: [(story) => <MaxWidthDecorator>{story()}</MaxWidthDecorator>],
} satisfies Meta<typeof Paginate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageCount: 10,
  },
};
