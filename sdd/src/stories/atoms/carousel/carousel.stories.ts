import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "../../../app/components/atoms/carousel/index";

const meta: Meta<typeof Carousel> = {
  title: "Atoms/캐러셀",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const 캐러셀: Story = {
  args: {},
};
