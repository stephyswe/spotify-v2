import type { Meta, StoryObj } from "@storybook/react";

import SidebarLibrary from "@/components/Sidebar/Bottom/Library";

const meta: Meta<typeof SidebarLibrary> = {
  title: "App/Sidebar/Bottom/Library",
  component: SidebarLibrary,
};

export default meta;
type Story = StoryObj<typeof SidebarLibrary>;

const commonArgs = {
  onClick: () => {},
};

const generateStory = (): Story => ({
  render: (args: any) => <SidebarLibrary {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
