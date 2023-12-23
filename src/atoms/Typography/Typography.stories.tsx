import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import React from "react";
const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Components/atoms/Typography",
  argTypes: {
    styling: {
      options: [
        "light",
        "regular",
        "medium",
        "italic",
        "bold",
        "semibold",
        "extrabold",
        "lightitalic",
        "mediumitalic",
        "bolditalic",
        "semibolditalic",
        "extrabolditalic",
      ],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyVariants: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: "40px" }}>
      <Typography {...args}>This is a sample typography text.</Typography>
    </div>
  ),
  args: {
    variant: "h1",
    noWrap: false,
    underline: false,
    strike: false,
    italic: false,
    styling: "regular",
    fontWeight: "bolder",
    style: {
      fontSize: "12px",
    },
  },
};

export const TypographyNoWrap: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: "40px", width: "250px" }}>
      <Typography {...args}>
        This is a sample typography text with overflown text.
      </Typography>
    </div>
  ),
  args: {
    variant: "h3",
    noWrap: true,
    underline: false,
    strike: false,
    italic: false,
    styling: "medium",
  },
};
