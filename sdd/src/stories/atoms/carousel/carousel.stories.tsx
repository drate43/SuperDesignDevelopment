import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselWrap,
  CarouselImage,
  CarouselTitle,
  CarouselPagination,
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
        <CarouselWrap length={3} height={300}>
          <li>
            <CarouselTitle justifyType={"right"} alignType={"bottom"}>
              Adidas
              <br />
              Brand Store
            </CarouselTitle>
            <CarouselImage
              url={
                "https://images.pixeden.com/images/branding-identity-business-card-psd-mockup_full_preview_retina.jpg"
              }
              alt={"임시 이미지1"}
            />
          </li>
          <li>
            <CarouselTitle justifyType={"left"} alignType={"bottom"}>
              Nike
              <br />
              Brand Store
            </CarouselTitle>
            <CarouselImage
              url={
                "https://www.pixeden.com/galleries/branding-identity-business-card-psd-mockup/002-business-card-cards-cardboard-identity-corporate-stationery-invitation-brand-graphic-design-free-psd-mockup-resource-pixeden.jpg"
              }
              alt={"임시 이미지2"}
            />
          </li>
          <li>
            <CarouselTitle justifyType={"left"} alignType={"top"}>
              Vans
              <br />
              Brand Store
            </CarouselTitle>
            <CarouselImage
              url={
                "https://www.pixeden.com/galleries/branding-identity-business-card-psd-mockup/003-business-card-cards-cardboard-identity-corporate-stationery-invitation-brand-graphic-design-free-psd-mockup-resource-pixeden.jpg"
              }
              alt={"임시 이미지3"}
            />
          </li>
        </CarouselWrap>
        <CarouselPagination currentIndex={1} total={3} />
      </>
    ),
    length: 3,
    height: 300,
  },
};
