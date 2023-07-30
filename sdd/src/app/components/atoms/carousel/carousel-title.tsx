import React, { ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselTitleProps {
  children: ReactNode;
}

// @todo - 텍스트 위치 조절 가능하게 설정가능 할 듯
const CarouselTitle = ({ children }: ICarouselTitleProps) => {
  return <p className={style.carouselTitle}>{children}</p>;
};

export default CarouselTitle;
