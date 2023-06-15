import type { Meta, StoryObj } from "@storybook/react";

import { SidebarFilter } from "./";

const meta: Meta<typeof SidebarFilter> = {
  title: "App/Sidebar/Filter/Filter",
  component: SidebarFilter,
};

export default meta;
type Story = StoryObj<typeof SidebarFilter>;

const commonArgs = {};

const generateStory = (): Story => ({
  render: (args: any) => <SidebarFilter {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
