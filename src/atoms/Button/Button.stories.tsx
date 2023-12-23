import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";
import { Heart } from "lucide-react";
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Atoms/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
  render: (args) => (
    <>
      <div
        style={{
          width: "200px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          background: "#0a2343",
        }}
      >
        <Button {...args}>Demo</Button>
      </div>
      <div
        style={{
          width: "200px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button {...args}>Demo</Button>
      </div>
    </>
  ),
  args: {
    rounded: true,
    size: "x-small",
    disabled: true,
    Icon: Heart,
    iconPosition: "right",
  },
};
