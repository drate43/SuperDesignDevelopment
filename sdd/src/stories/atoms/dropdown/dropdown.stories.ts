import type { Meta, StoryObj } from "@storybook/react";
import { DropDownMenu } from "../../../app/components/atoms/dropdown/index";

const meta: Meta<typeof DropDownMenu> = {
  title: "Atoms/DropDown",
  component: DropDownMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropDownMenu>;
export const DropDown: Story = {
  args: {},
};
