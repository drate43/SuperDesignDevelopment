import CarouselMain from "./carousel-main";
import CarouselImage from "./carousel-image";
import CarouselTitle from "./carousel-title";
import CarouselPagination from "./carousel-pagination";
import CarouselWrap from "./carousel-wrap";

export const Carousel = Object.assign(CarouselMain, {
  Title: CarouselTitle,
  Image: CarouselImage,
  Wrap: CarouselWrap,
  Pagination: CarouselPagination,
});

export {
  CarouselMain,
  CarouselWrap,
  CarouselImage,
  CarouselTitle,
  CarouselPagination,
};
