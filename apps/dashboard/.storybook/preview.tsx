import * as React from "react";
import "../styles/globals.css";
import type { Preview } from "@storybook/react";
import { TooltipProvider } from "../src/common/ui/tooltip";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
    (Story) => (
      <TooltipProvider>
        <div style={{ margin: "2rem" }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default preview;
