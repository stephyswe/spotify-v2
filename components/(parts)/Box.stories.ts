import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Box",

  },
};
