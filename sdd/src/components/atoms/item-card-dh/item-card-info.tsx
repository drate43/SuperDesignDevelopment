import React from "react";
import styles from "./item-card.module.scss";
import { useItemCardContext } from "@atoms/item-card-dh/item-card";

// 아이템 카드 이미지
export const ItemCardListImage = ({ children }) => {
  const { size } = useItemCardContext();

  return (
    <>
      {/*이미지 영역*/}
      <div
        className={styles.imgBox}
        style={{ width: size + "px", height: size + "px" }}
      >
        {children}
      </div>
    </>
  );
};

// 아이템 카드 브랜드 영역
export const ItemCardBrand = ({ children }) => {
  return (
    <>
      <p className={styles.brand}>{children}</p>
    </>
  );
};

// 아이템 카드 상품명 타이틀 영역
export const ItemCardTitle = ({ children }) => {
  return (
    <>
      <p className={styles.productTitle}>{children}</p>
    </>
  );
};

// 아이템 카드 가격 영역
export const ItemCardPrice = ({ children }) => {
  return (
    <>
      <div className={styles.priceBox}>{children}</div>
    </>
  );
};

// 아이템 카드 뱃지 영역
export const ItemCardBadge = ({ children }) => {
  return (
    <>
      <div className={styles.badgeBox}>{children}</div>
    </>
  );
};
