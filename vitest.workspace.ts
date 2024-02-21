import { defineWorkspace } from "vitest/config";

// defineWorkspace provides a nice type hinting DX
const workspaces = [
  {
    test: {
      include: [
        "packages/**/*.{test,spec}.{ts,js}",
        "apps/**/*.{test,spec}.{ts,js}",
      ],
      exclude: [
        "**/node_modules/**/*",
        "packages/embeds/**/*",
        "packages/lib/hooks/**/*",
      ],
      setupFiles: ["setupVitest.ts"],
    },
  },
  {
    test: {
      name: "@repo/packages/lib/hooks",
      include: ["packages/lib/hooks/**/*.{test,spec}.{ts,js}"],
      environment: "jsdom",
      setupFiles: [],
    },
  },
];

export default defineWorkspace(workspaces);
