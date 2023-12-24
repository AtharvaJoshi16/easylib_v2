import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { XCircle } from "lucide-react";
import ChipGroup from "./Chipgroup";
import { Colors } from "../../types/colorTypes";

const meta: Meta<typeof ChipGroup> = {
  component: ChipGroup,
  title: "Components/Molecules/ChipGroup",
  argTypes: {
    color: {
      options: Array<Colors>,
    },
    chipVariant: {
      options: ["contained", "outlined"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

const getSelectedChips = (chips: string[]) => {
  console.log(chips);
};

export const ChipGroupDefault: Story = {
  render: (args) => (
    <div style={{ margin: "30px", width: "400px" }}>
      <ChipGroup {...args} />
    </div>
  ),
  args: {
    deleteIcon: XCircle,
    chipVariant: "outlined",
    color: "secondary",
    getSelected: getSelectedChips,
    chips: [
      {
        label: "Carbs",
      },
      {
        label: "Fats",
      },
      {
        label: "Messages",
      },
      {
        label: "Demo",
      },
    ],
  },
};
