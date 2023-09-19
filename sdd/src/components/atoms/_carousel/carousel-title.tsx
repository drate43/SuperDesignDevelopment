import React, { CSSProperties, ReactNode } from "react";
import style from "./carousel.module.scss";

interface ICarouselTitleProps {
  children: ReactNode;
  cssStyle?: CSSProperties;
  justifyType: string;
  alignType: string;
}

// @todo - 텍스트 위치 조절 가능하게 설정가능 할 듯
const CarouselTitle = ({
  children,
  cssStyle,
  justifyType = "left",
  alignType = "top",
}: ICarouselTitleProps) => {
  return (
    <p
      className={`${style.carouselTitle} ${style[justifyType]} ${style[alignType]}`}
      style={cssStyle}
    >
      {children}
    </p>
  );
};

export default CarouselTitle;
