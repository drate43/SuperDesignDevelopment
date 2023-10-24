"use client";

import React from "react";
import styles from "./trade.module.scss";
import CarouselBox from "@/components/atoms/carousel";
import useCarousel from "@/hooks/carousel/useCarousel";
import ItemCardContainer from "@atoms/itemcard-mh";

const TradePage = () => {
  const [carouselList] = useCarousel();

  // 캐러셀 세부 컴포넌트
  const Slide = carouselList.map((data, index) => {
    const { image_path, alt } = data;

    return (
      <CarouselBox.Slide key={index}>
        <CarouselBox.Image src={image_path} alt={alt} fill />
      </CarouselBox.Slide>
    );
  });

  return (
    <main className={styles.tradeMain}>
      {/* 검색 인풋 필터 */}
      <div>검색 인풋 필터</div>
      {/*배너 영역*/}
      <CarouselBox height={200} itemList={carouselList}>
        <CarouselBox.SlideBox
          spaceBetween={50}
          slidesPerView={"auto"}
          onSlideChange={(data) => console.log("캐러샐 슬라이드", data)}
          onSwiper={(swiper) => console.log("캐러셀 생성 :::", swiper)}
        >
          {Slide}
        </CarouselBox.SlideBox>
      </CarouselBox>
      <br />
      {/* 1차 카테고리 필터 */}
      <div>1차 카테고리 필터</div>
      <br />
      {/* 2차 카테고리 필터 */}
      <div>2차 카테고리 필터</div>
      <br />
      {/* 필터 */}
      <div>필터</div>
      <br />
      <br />
      {/* 상품 리스트 */}
      <div>상품 리스트</div>
      <br />

      <ItemCardContainer />
      <br />
      <br />
    </main>
  );
};

export default TradePage;
