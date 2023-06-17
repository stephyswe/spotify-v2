import type { Meta, StoryObj } from "@storybook/react";

import SongItemBase from "@/components/Sidebar/Bottom/Songitem/SongItemBase";
import SongItemContent from "@/components/Sidebar/Bottom/Songitem/SongItemContent";
import { SongsData } from "@/libs/data/songs";

import ContentBase from "./SongItemListBase";

const meta: Meta<typeof ContentBase> = {
  title: "App/Sidebar/Bottom/SongItemList",
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
          isLibrary={false}
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
