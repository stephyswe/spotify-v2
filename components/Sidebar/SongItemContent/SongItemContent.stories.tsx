import type { Meta, StoryObj } from "@storybook/react";

import SongItemContent from "@/components/Sidebar/SongItemContent";

const meta: Meta<typeof SongItemContent> = {
  title: "App/Sidebar/SongItem/Content",
  component: SongItemContent,
};

export default meta;
type Story = StoryObj<typeof SongItemContent>;

const commonArgs = {
  isActive: false,
  isPlaying: false,
  type: "Artist",
};

const generateStory = (): Story => ({
  render: (args: any) => (
    <SongItemContent
      {...args}
      data={{
        author: "Author",
      }}
    />
  ),
  args: commonArgs,
});

export const Primary = generateStory();
