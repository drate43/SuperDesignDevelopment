import type { Meta, StoryObj } from "@storybook/react";
import CarouselBox from "@/components/atoms/carousel";
import style from "@/components/atoms/carousel/carousel.module.scss";
import React from "react";

const meta: Meta<typeof CarouselBox> = {
  title: "Atoms/Carousel",
  component: CarouselBox,
  tags: ["autodocs"],
  argTypes: {
    itemList: Array<any>,
  },
};

export default meta;

// 임시 캐러셀 리스트
const itemList = [
  {
    alt: "최대 9만 포인트 적립",
    image_path:
      "https://img.soldout.co.kr/items/2023/08/30/43d13354-6e3b-4b95-a4e8-a57d4b6226d9.png/soldout/resize/570x570/optimize",
  },
  {
    alt: "계좌이체 적립시 최대 할인",
    image_path:
      "https://img.soldout.co.kr/items/2023/09/15/08c74379-be1c-49dc-9ceb-9d7ae2f349e2.png/soldout/resize/570x570/optimize",
  },
  {
    alt: "크림 배너",
    image_path:
      "https://image.brandi.me/home/banner/bannerImage_1323726_1694759390.jpg",
  },
];

// 캐러셀 세부 컴포넌트
const Slide = itemList.map((data, index) => {
  const { image_path, alt } = data;

  return (
    <CarouselBox.Slide key={index}>
      <CarouselBox.Image src={image_path} alt={alt} fill />
    </CarouselBox.Slide>
  );
});

type Story = StoryObj<typeof CarouselBox>;

export const CarouselExample: Story = {
  args: {
    children: (
      // 스토리북 말고 기본적으로 <CarouselBox>로 감싸서 사용
      <div className={style.carouselWrap}>
        <CarouselBox.SlideBox
          spaceBetween={50}
          slidesPerView={"auto"}
          onSlideChange={(data) => console.log("slide change", data)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Slide}
        </CarouselBox.SlideBox>
      </div>
    ),
    height: 160,
    // 원래는 여기 list에서 제어 해야함
    itemList: [
      {
        alt: "나는 캐러셀1",
        image_path:
          "https://media.istockphoto.com/id/1404425850/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%EA%B0%95%EA%B3%BC-%EC%88%B2%EC%97%90%EC%84%9C-%EB%9E%98%ED%94%84%ED%8C%85-%EB%B3%B4%ED%8A%B8-%EB%98%90%EB%8A%94-%EC%B9%B4%EB%88%84%EC%9D%98-%EC%A1%B0%EA%B0%90%EB%8F%84-%EB%A0%88%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%EC%85%98-%EB%B0%8F-%EC%BA%A0%ED%95%91.jpg?s=2048x2048&w=is&k=20&c=SCMTKP38DejvMrYj2yAdR9la78Uf_G52wwzUr6Gr1N8=",
      },
      {
        alt: "나는 캐러셀2",
        image_path:
          "https://media.istockphoto.com/id/1432690812/ko/%EC%82%AC%EC%A7%84/%ED%98%B8%EC%88%98%EC%9D%98-%EC%98%A4%EB%9E%98%EB%90%9C-%EB%82%98%EB%AC%B4-%EB%B6%80%EB%91%90-%EC%9D%BC%EB%AA%B0-%EC%83%B7.webp?b=1&s=612x612&w=0&k=20&c=woyk2othlk7EWf4O0ywMF_5_ZhG8A8azWCsOP7aRNy0=",
      },
      {
        alt: "나는 캐러셀3",
        image_path:
          "https://media.istockphoto.com/id/1419410282/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%EB%B0%9D%EC%9D%80-%ED%83%9C%EC%96%91-%EA%B4%91%EC%84%A0%EC%9C%BC%EB%A1%9C-%EB%B4%84%EC%97%90%EC%84%9C-%EC%82%AC%EC%9D%BC%EB%9F%B0%ED%8A%B8-%EC%88%B2.jpg?s=2048x2048&w=is&k=20&c=qdZOqoFw6-oV6tl9k2QnQDuqPw1D9aVAPOtmq_-XUs0=",
      },
    ],
  },
};
