import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Atoms/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
  render: () => (
    <div>
      <Button>Demo</Button>
    </div>
  ),
};
