import React, { ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselProps {
  children: ReactNode;
  height: number;
}

const CarouselMain = ({ children, height }: ICarouselProps) => {
  return (
    <div className={style.carouselWrap} style={{ height: height + "px" }}>
      {children}
    </div>
  );
};

export default CarouselMain;
