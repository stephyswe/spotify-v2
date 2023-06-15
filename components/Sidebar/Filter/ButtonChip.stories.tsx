import type { Meta, StoryObj } from "@storybook/react";

import { ButtonChip } from "./";

const meta: Meta<typeof ButtonChip> = {
  title: "App/Sidebar/Filter/ButtonChip",
  component: ButtonChip,
};

export default meta;
type Story = StoryObj<typeof ButtonChip>;

const commonArgs = {
    title: "Playlists",
    tabIndex: -1,
};

const generateStory = (): Story => ({
  render: (args: any) => <ButtonChip {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
