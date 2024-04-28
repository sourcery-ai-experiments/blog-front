import Layout from "@/app/(footer)/layout";
import "@/app/globals.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [(storyFn) => <Layout>{storyFn()}</Layout>],
};

export default preview;
