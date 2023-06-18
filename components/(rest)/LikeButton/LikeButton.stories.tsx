import type { Meta, StoryObj } from "@storybook/react";
import { AiFillHeart } from "react-icons/ai";

import LikeButtonBase from "./LikeButtonBase";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LikeButtonBase> = {
  component: LikeButtonBase,
};

export default meta;
type Story = StoryObj<typeof LikeButtonBase>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    Icon: AiFillHeart,
  },
};
