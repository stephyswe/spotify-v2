import type { Meta, StoryObj } from "@storybook/react";

import MediaItemBase from "./MediaItemBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MediaItemBase> = {
  title: "App/Rest/MediaItem",
  component: MediaItemBase,
};

export default meta;
type Story = StoryObj<typeof MediaItemBase>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imageUrl: "https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
  },
};
