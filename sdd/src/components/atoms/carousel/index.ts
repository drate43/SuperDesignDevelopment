import { CarouselWrap } from "./carousel-wrap";
import CarouselSlideBox from "./carousel-slide-box";
import { SwiperSlide } from "swiper/react";
import CarouselImage from "./carousel-image";

export const CarouselBox = Object.assign(CarouselWrap, {
  SlideBox: CarouselSlideBox,
  Slide: SwiperSlide,
  Image: CarouselImage,
});

export default CarouselBox;
