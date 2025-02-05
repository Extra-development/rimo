import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
const meta: Meta<typeof Button> = {
  title: "components/button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click",
    variant: "solid",
    size: "sm",
  },
};
