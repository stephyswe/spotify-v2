import type { Meta, StoryObj } from "@storybook/react";

import { Light } from "./Light";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Light> = {
  title: "Example/Light",
  component: Light,
};

export default meta;
type Story = StoryObj<typeof Light>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {},
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="green" />
      <Light variant="yellow" />
      <Light variant="red" />
    </div>
  ),
};
