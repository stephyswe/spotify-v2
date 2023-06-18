import type { Meta, StoryObj } from "@storybook/react";

import ExpandedImage from ".";

const meta: Meta<typeof ExpandedImage> = {
  component: ExpandedImage,
};

export default meta;
type Story = StoryObj<typeof ExpandedImage>;

const commonArgs = {
  onPicture: () => {},
};

const generateStory = (): Story => ({
  render: (args: any) => <ExpandedImage {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
