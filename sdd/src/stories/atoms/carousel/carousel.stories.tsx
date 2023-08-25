import type { Meta, StoryObj } from "@storybook/react";
import CarouselBox from "../../../app/components/atoms/carousel";
import style from "../../../app/components/atoms/carousel/carousel.module.scss";

const meta: Meta<typeof CarouselBox> = {
  title: "Atoms/Carousel",
  component: CarouselBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CarouselBox>;

export const CarouselExample: Story = {
  args: {
    children: (
      // 스토리북 말고 기본적으로 <CarouselBox>로 감싸서 사용
      <div className={style.carouselWrap}>
        <ul className={style.carouselList}>
          <li>
            <CarouselBox.Image
              src={"http://via.placeholder.com/300x300"}
              alt={"테스트용1"}
              loading="lazy"
            />
          </li>
          <li>
            <CarouselBox.Image
              src={"http://via.placeholder.com/300x300"}
              alt={"테스트용2"}
              loading="lazy"
            />
          </li>
          <li>
            <CarouselBox.Image
              src={"http://via.placeholder.com/300x300"}
              alt={"테스트용3"}
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    ),
    height: 300,
  },
};
