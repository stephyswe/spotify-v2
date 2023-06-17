import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

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

export const HoverCheckColor = {
  render: (args: any) => <SearchButton {...args} />,
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    const SearchButton = canvas.getByRole("button");

    await userEvent.hover(SearchButton);
    await userEvent.click(SearchButton);
    await userEvent.unhover(SearchButton);
    await userEvent.click(SearchButton);


    // Check initial background color
    /* await expect(canvas.getByRole("listitem")).toHaveStyle({
      backgroundColor: "rgba(0, 0, 0, 0)",
    }); */

    //unhover

    // Hover over the list item
  },
};

export const Primary = generateStory();
