import type { Meta, StoryObj } from "@storybook/react";

import SidebarLibrary from "@/components/Sidebar/Bottom/Library";

const meta: Meta<typeof SidebarLibrary> = {
  component: SidebarLibrary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarLibrary>;

const commonArgs = {
  onClickPlus: () => {},
};

const generateStory = (): Story => ({
  render: (args: any) => <SidebarLibrary {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
