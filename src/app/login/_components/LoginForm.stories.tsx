import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginForm from "@/app/login/_components/LoginForm";
import MaxWidthDecorator from "@/components/decorator/MaxWidthDecorator";

const meta = {
  title: "Pages/로그인 페이지",
  args: {
    action: fn(),
  },
  component: LoginForm,
  decorators: [
    (story) => (
      <MaxWidthDecorator maxWidth="max-w-screen-sm">
        {story()}
      </MaxWidthDecorator>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Errors: Story = {
  args: {
    fieldErrors: {
      email: ["이메일을 입력해 주세요."],
      password: ["비밀번호를 입력해 주세요."],
    },
  },
};
