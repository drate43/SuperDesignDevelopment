/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styles from "./item-card.module.scss";
import ItemCardDH from "@atoms/item-card-dh";
import { useItemCardContext } from "@atoms/item-card-dh/item-card";

const ItemCardList = () => {
  const { size, itemCardList } = useItemCardContext();

  return (
    <>
      {itemCardList.map((data, index) => {
        const { title, alt, image_path, item_info, isCoupon, isSale } = data;

        return (
          <li
            key={"item_card_" + index}
            css={css`
              width: ${size}px;
            `}
          >
            {/*이미지 영역*/}
            <ItemCardDH.Image src={image_path} alt={alt} />

            {/*아이템 정보*/}
            <div className={styles.itemInfo}>
              <ItemCardDH.InfoBrand>
                {item_info.brand_name}
              </ItemCardDH.InfoBrand>
              <ItemCardDH.InfoTitle>{title}</ItemCardDH.InfoTitle>
              <ItemCardDH.InfoPrice>
                <span className={styles.rate}>{item_info.rate}</span>
                <span className={styles.price}>
                  {item_info.price.toLocaleString("ko-KR")}원
                </span>
              </ItemCardDH.InfoPrice>

              {/*뱃지영역*/}
              {(isCoupon || isSale) && (
                <ItemCardDH.InfoBadge>
                  {isCoupon && <span>쿠폰</span>}
                  {isSale && <span>단독세일</span>}
                </ItemCardDH.InfoBadge>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ItemCardList;
