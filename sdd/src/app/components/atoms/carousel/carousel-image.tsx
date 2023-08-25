import React from "react";
import Image from "next/image";
import { useCarouselContext } from "./carousel-wrap";

// @todo - Image 관련 옵션 설정 추가하기
const CarouselImage = ({ ...props }) => {
  const { height } = useCarouselContext();

  return (
    <Image
      width={height}
      height={height}
      style={{ pointerEvents: "none" }}
      {...props}
    />
  );
};

export default CarouselImage;
