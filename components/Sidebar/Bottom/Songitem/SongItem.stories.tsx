import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import SongItemContent from "@/components/Sidebar/Bottom/Songitem/SongItemContent";
import { SongsData } from "@/libs/data/songs";

import SongItemBase from "./SongItemBase";

const meta: Meta<typeof SongItemBase> = {
  component: SongItemBase,
};

export default meta;
type Story = StoryObj<typeof SongItemBase>;

const commonArgs = {
  onClick: () => {},
};

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

export const HoverCheckColor = {
  render: (args: any) => (
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
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    // Check initial background color
    await expect(canvas.getByRole("listitem")).toHaveStyle({
      backgroundColor: "rgba(0, 0, 0, 0)",
    });

    // Hover over the list item
    await userEvent.hover(canvas.getByRole("listitem"));

    // Check background color after hovering
    await expect(canvas.getByRole("listitem")).toHaveStyle({
      backgroundColor: "rgba(246, 246, 246, 0)",
    });

    // Unhover the list item
    await userEvent.unhover(canvas.getByRole("listitem"));

    // Check background color after hover is removed
    await expect(canvas.getByRole("listitem")).toHaveStyle({
      backgroundColor: "rgba(0, 0, 0, 0)",
    });
  },
};

export const Primary = generateStory();
