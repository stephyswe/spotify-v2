import type { Meta, StoryObj } from "@storybook/react";

import { SvgArrowRight } from "@/components/icons/SvgArrowRight";
import { SvgLibrary } from "@/components/icons/SvgLibrary";
import { SvgPlus } from "@/components/icons/SvgPlus";

import { LibraryIcon } from "../Icon";
import { LibraryButton } from "./LibraryButton";

const meta: Meta<typeof LibraryButton> = {
  title: "App/Sidebar/Bottom/Library/Button",
  component: LibraryButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LibraryButton>;
type ButtonIcon = typeof SvgLibrary | typeof SvgPlus | typeof SvgArrowRight;

const iconClassNames = {
  [SvgLibrary.name]: "jEDcnm",
  [SvgPlus.name]: "hYdsxw",
  [SvgArrowRight.name]: "hYdsxw",
};

const commonArgs = {
  label: "Collapse Your Library",
  className:
    "Button-sc-1dqy6lx-0 CZhyv RAWO6AczuDMOTI0qAc0a OMCDc2F7g_AufJAtaKfL ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ",
};

const generateStory = (Icon: ButtonIcon, text?: boolean): Story => ({
  render: (args) => (
    <LibraryButton {...args}>
      <LibraryIcon className={iconClassNames[Icon.name]} Icon={Icon} />
      {text ? args.label : null}
    </LibraryButton>
  ),
  args: commonArgs,
});

export const Primary = generateStory(SvgLibrary, true);
export const Plus = generateStory(SvgPlus);
export const ArrowRight = generateStory(SvgArrowRight);
