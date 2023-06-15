import type { Meta, StoryObj } from "@storybook/react";

import { SvgLibrary } from "@/components/icons/SvgLibrary";

import { IconWrapper } from ".";

const meta: Meta<typeof IconWrapper> = {
  title: "App/Sidebar/Bottom/IconWrapper",
  component: IconWrapper,
};

export default meta;
type Story = StoryObj<typeof IconWrapper>;

const commonArgs = {
  Icon: SvgLibrary,
  className: "jEDcnm",
};

const generateStory = (): Story => ({
  render: (args: any) => <IconWrapper {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
