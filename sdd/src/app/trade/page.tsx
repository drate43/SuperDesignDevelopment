"use client";

import React from "react";
import styles from "./trade.module.scss";
import CarouselBox from "@/components/atoms/carousel";
import useCarousel from "@/hooks/carousel/useCarousel";
import ItemCardDH from "@atoms/item-card-dh";
import useItemCard from "@/hooks/item-card-dh/useItemCard";
import useItemCardJL from "@/hooks/item-card-jl/useItemCard";
import ItemCardJL from "@/components/atoms/itemCard-jl";

const TradePage = () => {
  const [carouselList] = useCarousel();
  const { itemCardList } = useItemCard();
  const { itemList1, itemList2 } = useItemCardJL();

  // 캐러셀 세부 컴포넌트
  const Slide = carouselList.map((data, index) => {
    const { image_path, alt } = data;
    return (
      <CarouselBox.Slide key={index}>
        <CarouselBox.Image src={image_path} alt={alt} fill />
      </CarouselBox.Slide>
    );
  });

  const itemCardItem = itemList1?.map((item) => {
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
      <ItemCardJL.Item key={id}>
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
        <ItemCardJL.ItemName className={styles.itemName}>
          {item_name}
        </ItemCardJL.ItemName>
        <p className={styles.itemPrice}>
          {is_custody === 1 && (
            <ItemCardJL.Badge type={"custody"} value={is_custody} />
          )}
          <ItemCardJL.Price type={"won"}>{display_price}</ItemCardJL.Price>
        </p>
      </ItemCardJL.Item>
    );
  });

  const itemCardItem1 = itemList2?.map((item) => {
    const { id, name_kor, price_type, image_path, is_custody, min_price } =
      item;

    return (
      <ItemCardJL.Item key={id}>
        <ItemCardJL.ImgWrap>
          <ItemCardJL.Img url={image_path} alt={name_kor} />
        </ItemCardJL.ImgWrap>
        <ItemCardJL.ItemName className={styles.itemName}>
          {name_kor}
        </ItemCardJL.ItemName>
        <div className={styles.item1PriceWrap}>
          <ItemCardJL.Price type={"comma"} className={styles.item1Price}>
            {min_price}
          </ItemCardJL.Price>
          {price_type && <p className={styles.item1PriceType}>{price_type}</p>}
          {is_custody === 1 && <ItemCardJL.BadgeDirectDelivery />}
        </div>
      </ItemCardJL.Item>
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
          onSlideChange={(data: any) => console.log("캐러샐 슬라이드", data)}
          onSwiper={(swiper: any) => console.log("캐러셀 생성 :::", swiper)}
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
      {/* 상품 리스트 - 동현 */}
      <div style={{ padding: "16px 0", background: "#eee" }}>
        <ItemCardDH
          title={"맛있는 캠핑을 위하여!"}
          itemCardList={itemCardList}
          size={160}
          gap={16}
        >
          <ItemCardDH.header />
          <ItemCardDH.contents />
        </ItemCardDH>
      </div>

      <br />
      <div>
        <h4>쥐리</h4>
        <ItemCardJL
          itemCardData={itemList1}
          grid={3}
          gap={5}
          lineClamp={2}
          priceType={"won"}
        >
          <ItemCardJL.List>{itemCardItem}</ItemCardJL.List>
        </ItemCardJL>

        <ItemCardJL
          itemCardData={itemList2}
          grid={2}
          gap={10}
          lineClamp={2}
          priceType={"won"}
        >
          <ItemCardJL.List>{itemCardItem1}</ItemCardJL.List>
        </ItemCardJL>
      </div>
    </main>
  );
};

export default TradePage;
