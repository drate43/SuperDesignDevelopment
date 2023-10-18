import type { Meta, StoryObj } from "@storybook/react";
import { DropDownMenu } from "@components/index";
import { IDropDownItem } from "@atoms/dropdown";

const meta: Meta<typeof DropDownMenu> = {
  title: "Atoms/DropDown",
  component: DropDownMenu,
  tags: ["autodocs"],
  argTypes: {
    items: Array<IDropDownItem>,
  },
};

export default meta;

type Story = StoryObj<typeof DropDownMenu>;
export const DropDown: Story = {
  args: {
    children: <button>{"button"}</button>,
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
};
