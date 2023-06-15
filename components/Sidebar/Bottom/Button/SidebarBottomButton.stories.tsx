import type { Meta, StoryObj } from "@storybook/react";

import { IconWrapper } from "@/components/Sidebar/Bottom/IconWrapper";
import { SvgArrowRight } from "@/components/icons/SvgArrowRight";
import { SvgLibrary } from "@/components/icons/SvgLibrary";
import { SvgPlus } from "@/components/icons/SvgPlus";

import { SidebarBottomButton } from "./SidebarBottomButton";

const meta: Meta<typeof SidebarBottomButton> = {
  title: "App/Sidebar/Bottom/SidebarBottomButton",
  component: SidebarBottomButton,
};

export default meta;

type Story = StoryObj<typeof SidebarBottomButton>;
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
    <SidebarBottomButton {...args}>
      <IconWrapper className={iconClassNames[Icon.name]} Icon={Icon} />
      {text ? args.label : null}
    </SidebarBottomButton>
  ),
  args: commonArgs,
});

export const Primary = generateStory(SvgLibrary, true);
export const Plus = generateStory(SvgPlus);
export const ArrowRight = generateStory(SvgArrowRight);
