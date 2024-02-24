import { create } from "@storybook/theming";

const BASE_URL = process.env.BASE_URL;

export default create({
  base: "dark",
  brandTitle: "Bookmarker UI",
  brandUrl: BASE_URL,
  brandImage: `${BASE_URL}/brand/logo.svg`,
  brandTarget: "_self",
});
