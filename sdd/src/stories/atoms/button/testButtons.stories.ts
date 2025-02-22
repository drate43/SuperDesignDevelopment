import type { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "../../../components/atoms/button/TestButton";

const meta: Meta<typeof TestButton> = {
  title: "atoms/Button/TestButton",
  component: TestButton,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof TestButton>;
export const Button: Story = {
  args: {
    label: "Button",
  },
};
