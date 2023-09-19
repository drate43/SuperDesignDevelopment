import React, { ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselPaginationProps {
  currentIndex: number;
  total: number;
}

const CarouselPagination = ({
  currentIndex,
  total,
}: ICarouselPaginationProps) => {
  return (
    <div className={style.pagenation}>
      <span className={style.currentNum}>{currentIndex}</span>/
      <strong className={style.totalNum}>{total}</strong>
    </div>
  );
};

export default CarouselPagination;
