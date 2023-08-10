import React, { ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselProps {
  children: ReactNode;
}

const CarouselMain = ({ children }: ICarouselProps) => {
  return (
    <div className={style.carouselWrap}>
      <ul className={style.carouselList}>
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default CarouselMain;
