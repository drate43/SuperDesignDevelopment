import React, { ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselWrapProps {
  children: ReactNode;
  length: number;
  height: number;
}

const CarouselWrap = ({ children, length, height }: ICarouselWrapProps) => {
  return (
    <ul
      className={style.carouselList}
      style={{ width: length * 100 + "vw", height: height + "px" }}
    >
      {children}
    </ul>
  );
};

export default CarouselWrap;
