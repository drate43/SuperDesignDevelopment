import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "../../../app/components/atoms/collapse/collapse";

const meta: Meta<typeof Collapse> = {
    component: Collapse,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: {
          control: "color",
        },
        title: {
            control: "text",
            minLength: 0,
            maxLength: 100
        }
      },
};

export default meta;

type Story = StoryObj<typeof Collapse>;
export const BasicCollapse: Story = {
    args: {
        backgroundColor: "#ddd",
        title: '여기가 타이틀',
        content: '여기가 바디'
    }
};
