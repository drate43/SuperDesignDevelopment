import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselImage,
  CarouselTitle,
} from "../../../app/components/atoms/carousel/index";

const meta: Meta<typeof Carousel> = {
  title: "Atoms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const CarouselExample: Story = {
  args: {
    children: (
      <>
        <CarouselTitle justifyType={"center"} alignType={"middle"}>
          Adidas
          <br />
          Brand Store
        </CarouselTitle>
        <CarouselImage
          url={"http://via.placeholder.com/640x480"}
          alt={"임시 이미지"}
        />
      </>
    ),
  },
};
