import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Chip from "./Chip";
import { XCircle } from "lucide-react";

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Components/Atoms/Chip",
};

export default meta;
type Story = StoryObj<typeof Chip>;

const onSelect = (label: string, selected: boolean) => {
  console.log(label, selected);
};

const onDelete = () => {
  console.log("Deleted");
};

export const ChipDefault: Story = {
  render: (args) => (
    <div style={{ margin: "30px", display: "flex", justifyContent: "center" }}>
      <Chip {...args} />
    </div>
  ),
  args: {
    label: "Chip",
    DeleteIcon: XCircle,
    onChipSelectUnselect: onSelect,
    onDelete: onDelete,
  },
};
