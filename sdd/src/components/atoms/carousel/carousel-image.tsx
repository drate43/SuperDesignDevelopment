import React from "react";
import Image from "next/image";

// @todo - Image 관련 옵션 설정 추가하기
const CarouselImage = ({ ...props }) => {
  return <Image style={{ pointerEvents: "none" }} {...props} />;
};

export default CarouselImage;
