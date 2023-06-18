import type { Meta, StoryObj } from "@storybook/react";

import SearchDropdown from "./SearchDropdown";

const meta: Meta<typeof SearchDropdown> = {
  component: SearchDropdown,
};

export default meta;
type Story = StoryObj<typeof SearchDropdown>;

const commonArgs = {
  isOpen: false,
};

const generateStory = (): Story => ({
  render: (args: any) => <SearchDropdown {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
