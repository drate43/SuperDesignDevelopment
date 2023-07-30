import React, { ReactNode } from "react";
import style from "./carousel.module.scss";
import CarouselTitle from "./carousel-title";
import CarouselImage from "./carousel-image";

interface ICarouselProps {
  children: ReactNode;
}

const CarouselMain = ({ children }: ICarouselProps) => {
  return (
    <div className={style.carouselWrap}>
      <ul className={style.carouselList}>
        {/*합성 컴포넌트 사용시 children으로 사용*/}
        {/*<li>{children}</li>*/}
        <li>
          <CarouselTitle>
            Adidas
            <br />
            Brand Store
          </CarouselTitle>
          <CarouselImage
            url={"http://via.placeholder.com/640x480"}
            alt={"임시 이미지"}
          />
        </li>
      </ul>
    </div>
  );
};

export default CarouselMain;
