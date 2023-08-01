import type { Meta, StoryObj } from "@storybook/react";
import {
  DropDownMenu,
  IDropDownItem,
} from "../../../app/components/atoms/dropdown/index";

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
    items: [{ name: "1", value: "2" }],
  },
};
