import type { Meta, StoryObj } from "@storybook/react";

import { SvgLibrary } from "@/components/icons/SvgLibrary";

import { LibraryIcon } from ".";

const meta: Meta<typeof LibraryIcon> = {
  component: LibraryIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LibraryIcon>;

const commonArgs = {
  Icon: SvgLibrary,
  className: "jEDcnm",
};

const generateStory = (): Story => ({
  render: (args: any) => <LibraryIcon {...args} />,
  args: commonArgs,
});

export const Primary = generateStory();
