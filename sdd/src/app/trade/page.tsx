"use client";

import React from "react";
import styles from "./trade.module.scss";
import CarouselBox from "@/components/atoms/carousel";
import useCarousel from "@/hooks/carousel/useCarousel";

import { ItemCards, ProductCard } from "@/components/index";
import { nanoid } from "nanoid";

interface IItem {
  title: string;
  alt: string;
  image_path: string;

  item_info: {
    brand_name: string;
    rate: string;
    price: number;
  };
  isCoupon: boolean;
  isSale: boolean;
}

const itemList: IItem[] = [
  {
    title: "꿈의 거처 앨범 1",
    alt: "꿈의 거처 앨범1",
    image_path:
      "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
    item_info: {
      brand_name: "르아브",
      rate: "20%",
      price: 19000,
    },
    isCoupon: true,
    isSale: true,
  },
  {
    title: "꿈의 거처 앨범 2",
    alt: "꿈의 거처 앨범2",
    image_path:
      "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
    item_info: {
      brand_name: "트란지아",
      rate: "25%",
      price: 129000,
    },
    isCoupon: false,
    isSale: true,
  },
  {
    title: "꿈의 거처 앨범 3",
    alt: "꿈의 거처 앨범3",
    image_path:
      "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
    item_info: {
      brand_name: "르메르",
      rate: "30%",
      price: 29000,
    },
    isCoupon: true,
    isSale: true,
  },
];

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

  const Title = <div className="text-4xl">{"용문 상품 리스트"}</div>;

  const lastLoadMore = () => {
    console.log("test");
  };

  return (
    <main className={styles.tradeMain}>
      <div>
        <ItemCards
          key={nanoid()}
          itemDirection="vertical"
          loadMore={lastLoadMore}
          header={Title}
          dataSource={itemList}
          renderItem={(item, index) => {
            return (
              <ItemCards.item key={nanoid()}>
                <ProductCard>
                  <ProductCard.Image
                    path={item.image_path}
                    name={"상품 이미지"}
                    height={100}
                    width={100}
                  />
                  <ProductCard.Brand name={item.item_info.brand_name} />
                  <ProductCard.Name name={item.title} />
                  <ProductCard.PriceArea>
                    <ProductCard.PriceArea.SalePercent
                      rate={item.item_info.rate}
                    />
                    <ProductCard.PriceArea.Price price={item.item_info.price} />
                  </ProductCard.PriceArea>
                </ProductCard>
              </ItemCards.item>
            );
          }}
        />
      </div>
    </main>
  );
};

export default TradePage;
