import React from "react";
import Image from "next/image";

interface ICarouselImage {
  url: string;
  alt: string;
}

// @todo - Image 관련 옵션 설정 추가하기
const CarouselImage = ({ url, alt }: ICarouselImage) => {
  return (
    <Image
      src={url}
      alt={alt}
      loading="lazy"
      fill
      style={{ pointerEvents: "none" }}
    />
  );
};

export default CarouselImage;
