import type { Meta, StoryObj } from "@storybook/react";

import { SvgLibrary } from "@/components/icons/SvgLibrary";

import Search from ".";

const meta: Meta<typeof Search> = {
  title: "App/Sidebar/Bottom/Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

const commonArgs = {};

const generateStory = (): Story => ({
  render: (args: any) => <Search {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
