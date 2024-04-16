import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      type: "string",
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { errors: [], value: "test" },
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
