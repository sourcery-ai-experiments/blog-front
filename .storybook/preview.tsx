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
  decorators: [
    (storyFn) => (
      <div className="max-w-screen-sm mx-auto py-20 px-4">{storyFn()}</div>
    ),
    // withThemeByClassName({
    //   themes: {
    //     light: "",
    //     dark: "dark",
    //   },
    //   defaultTheme: "light",
    // }),
  ],
};

export default preview;
