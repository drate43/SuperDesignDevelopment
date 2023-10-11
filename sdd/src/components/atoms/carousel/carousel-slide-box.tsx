import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { useCarouselContext } from "@/components/atoms/carousel/carousel-wrap";

const CarouselSlideBox = ({ children, ...props }) => {
  const { height } = useCarouselContext();

  return (
    <Swiper style={{ height: height }} {...props}>
      {children}
    </Swiper>
  );
};

export default CarouselSlideBox;
