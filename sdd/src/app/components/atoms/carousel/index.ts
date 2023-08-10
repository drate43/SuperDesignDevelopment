import CarouselMain from "./carousel-main";
import CarouselImage from "./carousel-image";
import CarouselTitle from "./carousel-title";
import CarouselPagination from "./carousel-pagination";

export const Carousel = Object.assign(CarouselMain, {
  Title: CarouselTitle,
  Image: CarouselImage,
  Pagination: CarouselPagination,
});

export { CarouselMain, CarouselImage, CarouselTitle, CarouselPagination };
