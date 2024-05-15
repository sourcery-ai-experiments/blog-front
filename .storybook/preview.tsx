// import Layout from "@/app/(footer)/layout";
import "@/app/globals.css";
import { fontSans } from "@/app/layout";
import { cn } from "@/lib/utils";
import type { Preview } from "@storybook/react";
import type React from "react";

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return <div className={cn("font-sans", fontSans.variable)}>{children}</div>
}

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
  decorators: [(storyFn) => <RootLayout>{storyFn()}</RootLayout>],
};

export default preview;
