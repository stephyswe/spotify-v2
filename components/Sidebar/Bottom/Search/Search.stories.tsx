import type { Meta, StoryObj } from "@storybook/react";

import Search from ".";

const meta: Meta<typeof Search> = {
  title: "App/Sidebar/Bottom/Search",
  component: Search,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Search>;

const commonArgs = {};

const generateStory = (): Story => ({
  render: (args: any) => <Search {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
