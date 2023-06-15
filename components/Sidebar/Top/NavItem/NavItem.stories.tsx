import type { Meta, StoryObj } from "@storybook/react";

import { SvgHome } from "@/components/icons/SvgHome";
import { SvgSearch } from "@/components/icons/SvgSearch";

import NavItem from ".";

const meta: Meta<typeof NavItem> = {
  title: "App/Sidebar/Top/NavItem",
  component: NavItem,
};

export default meta;

type Story = StoryObj<typeof NavItem>;
type ButtonIcon = typeof SvgHome | typeof SvgSearch;
type ButtonLabel = "Home" | "Search";

const commonArgs = {
  label: "Home",
  href: "/home",
};

const generateStory = (Icon: ButtonIcon, label: ButtonLabel): Story => ({
  render: (args) => <NavItem {...args} icon={Icon} label={label} />,
  args: commonArgs,
});

export const Primary = generateStory(SvgHome, "Home");
export const Search = generateStory(SvgSearch, "Search");
