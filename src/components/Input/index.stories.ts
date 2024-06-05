import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from ".";

const meta = {
  title: "Components/Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      type: "string",
    },
  },
  args: {
    errors: [],
    value: "test",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Hi this is input",
  },
};

export const Error: Story = {
  args: { errors: ["Error"], value: "Wrong text input" },
};

export const Disabled: Story = {
  args: {
    errors: ["this is multiline error", "this is multiline error22"],
    value: "Wrong text input",
  },
};
