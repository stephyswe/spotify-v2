import type { Meta, StoryObj } from "@storybook/react";

import SongItemContent from "@/components/Sidebar/SongItemContent";
import { SongsData } from "@/libs/data/songs";

import SongItemBase from "./SongItemBase";

const meta: Meta<typeof SongItemBase> = {
  title: "App/Sidebar/SongItem",
  component: SongItemBase,
};

export default meta;
type Story = StoryObj<typeof SongItemBase>;

const commonArgs = {};

const generateStory = (): Story => ({
  render: (args) => (
    <SongItemBase
      onClick={() => {}}
      data={SongsData[0]}
      isActive={false}
      isPlaying={false}
      isPlaylist={false}
      imageUrl={SongsData[0].imageUrl}
    >
      <SongItemContent
        isActive={false}
        isPlaying={false}
        type="Artist"
        data={SongsData[0]}
      />
    </SongItemBase>
  ),
  args: commonArgs,
});

export const Primary = generateStory();
