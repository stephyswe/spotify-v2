import type { Meta, StoryObj } from "@storybook/react";

import SearchButton from "./SearchButton";

const meta: Meta<typeof SearchButton> = {
  title: "App/Sidebar/Bottom/Search/Button",
  component: SearchButton,
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

const commonArgs = {
    isOpen: false,
};

const generateStory = (): Story => ({
  render: (args: any) => <SearchButton {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
