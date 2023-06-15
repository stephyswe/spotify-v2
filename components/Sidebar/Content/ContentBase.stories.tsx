import type { Meta, StoryObj } from "@storybook/react";

import { SidebarSongItem } from "@/components/Sidebar/Songitem";
import SongItemBase from "@/components/Sidebar/Songitem/SongItemBase";
import SongItemContent from "@/components/Sidebar/Songitem/SongItemContent";
import { SongsData } from "@/libs/data/songs";

import ContentBase from "./ContentBase";

const meta: Meta<typeof ContentBase> = {
  title: "App/Sidebar/Content",
  component: ContentBase,
};

export default meta;
type Story = StoryObj<typeof ContentBase>;

const commonArgs = {};

const generateStory = (): Story => ({
  render: (args) => (
    <ContentBase {...args}>
      {SongsData.map((song: any) => (
        <SongItemBase
          key={song.id}
          onClick={() => {}}
          data={song}
          isActive={song.id === 0}
          isPlaying={song.id === 0 && false}
          isPlaylist={false}
          imageUrl={song.imageUrl}
        >
          <SongItemContent
            isActive={false}
            isPlaying={false}
            type="Artist"
            data={{
              author: song.author,
            }}
          />
        </SongItemBase>
      ))}
    </ContentBase>
  ),
  args: commonArgs,
});

export const Primary = generateStory();
