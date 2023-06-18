import type { Meta, StoryObj } from "@storybook/react";

import { SongsData } from "@/libs/data/songs";

import SidebarBottom from ".";

const meta: Meta<typeof SidebarBottom> = {
  component: SidebarBottom,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarBottom>;

const commonArgs = {
  songs: SongsData,
};

const generateStory = (): Story => ({
  render: (args: any) => <SidebarBottom {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
