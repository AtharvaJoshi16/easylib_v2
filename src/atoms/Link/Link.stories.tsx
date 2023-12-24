import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Components/Atoms/Link",
};

export default meta;
type Story = StoryObj<typeof Link>;

export const LinkDefault: Story = {
  render: (args) => (
    <>
      <div
        style={{
          margin: "20px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link {...args}>Demo Link</Link>
      </div>
      <div
        style={{
          margin: "20px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          background: "#0a2343",
        }}
      >
        <Link {...args}>Demo Link</Link>
      </div>
    </>
  ),
  args: {
    href: "#",
  },
};
