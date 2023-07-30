import React from "react";
import Image from "next/image";

interface ICarouselImage {
  url: string;
  alt: string;
}

// @todo - Image 관련 옵션 설정 추가하기
const CarouselImage = ({ url, alt }: ICarouselImage) => {
  return (
    // @todo - Image 컴포넌트 관련 옵션 찾아보기
    <Image src={url} alt={alt} fill />
  );
};

export default CarouselImage;
