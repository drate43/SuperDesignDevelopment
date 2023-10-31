"use client";

import React from "react";
import styles from "./trade.module.scss";
import CarouselBox from "@/components/atoms/carousel";
import useCarousel from "@/hooks/carousel/useCarousel";
import {
  itemCardData,
  itemCardData1,
} from "@/components/atoms/itemCard-jl/itemCardData";
import ItemCardJL from "@/components/atoms/itemCard-jl";

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

  const itemCardItem = itemCardData?.map((item) => {
    const {
      id,
      brand_color,
      image_path,
      item_name,
      badge,
      is_custody,
      display_price,
    } = item;

    return (
      <ItemCardJL.ItemCardItem key={id}>
        <ItemCardJL.ImgWrap bg={brand_color}>
          <ItemCardJL.Img url={image_path} alt={item_name} />
          <ItemCardJL.BadgeWrap>
            <ItemCardJL.Badge
              type={"under-retail"}
              value={badge?.is_under_retail}
            />
            <ItemCardJL.Badge type={"grade"} value={badge?.is_grade} />
            <ItemCardJL.Badge
              type={"secondhand"}
              value={badge?.is_secondhand}
            />
          </ItemCardJL.BadgeWrap>
        </ItemCardJL.ImgWrap>
        <ItemCardJL.ItemName>{item_name}</ItemCardJL.ItemName>
        <ItemCardJL.BadgePrice
          badgeType={"custody"}
          badgeValue={is_custody}
          price={display_price}
        />
      </ItemCardJL.ItemCardItem>
    );
  });

  const itemCardItem1 = itemCardData1?.map((item) => {
    const { id, name_kor, price_type, image_path, is_custody, min_price } =
      item;

    return (
      <ItemCardJL.ItemCardItem key={id}>
        <ItemCardJL.ImgWrap>
          <ItemCardJL.Img url={image_path} alt={name_kor} />
        </ItemCardJL.ImgWrap>
        <ItemCardJL.ItemName>{name_kor}</ItemCardJL.ItemName>
        <ItemCardJL.BadgePrice
          badgeType={"custody"}
          badgeValue={is_custody}
          price={min_price}
        />
        {price_type && <p>{price_type}</p>}
      </ItemCardJL.ItemCardItem>
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
      {/* 상품 리스트 */}
      <div>상품 리스트</div>
      <br />
      <div>
        <h4>쥐리</h4>
        <ItemCardJL
          itemCardData={itemCardData}
          grid={3}
          gap={5}
          lineClamp={2}
          priceType={"won"}
        >
          <ItemCardJL.ItemCardList>{itemCardItem}</ItemCardJL.ItemCardList>
        </ItemCardJL>

        <ItemCardJL
          itemCardData={itemCardData}
          grid={2}
          gap={10}
          lineClamp={2}
          priceType={"won"}
        >
          <ItemCardJL.ItemCardList>{itemCardItem1}</ItemCardJL.ItemCardList>
        </ItemCardJL>
      </div>
    </main>
  );
};

export default TradePage;
