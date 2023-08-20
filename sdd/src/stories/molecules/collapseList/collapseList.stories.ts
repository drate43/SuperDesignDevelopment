import { CollapseList } from "../../../app/components/molecules/collapseList/collapseList";
import { StoryObj } from "@storybook/react";

export default {
  component: CollapseList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CollapseList>;

export const BasicCollapseList: Story = {
  args: {},
};
