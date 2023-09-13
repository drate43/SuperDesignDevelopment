import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";

const CarouselSlideBox = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default CarouselSlideBox;
