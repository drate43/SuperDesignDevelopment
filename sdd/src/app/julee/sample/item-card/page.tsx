"use client";

import React from "react";
import styles from "./item-card.module.scss";
import useItemCardJL from "@/hooks/item-card-jl/useItemCard";
import ItemCard from "@/components/julee/itemCard";
import { disableValidation } from "schema-utils";

const SampleItemCardPage = () => {
  const { itemList1, itemList2 } = useItemCardJL();

  const itemCardItem1 = itemList1?.map((item) => {
    const {
      id,
      brand_color,
      image_path,
      item_name,
      badge,
      is_custody,
      price_type,
      display_price,
    } = item;

    return (
      <ItemCard.Item key={id}>
        <ItemCard.ImgWrap bg={brand_color}>
          <ItemCard.Img url={image_path} alt={item_name} />
          <ItemCard.BadgeWrap className={styles.itemImgBadge}>
            <ItemCard.Badge
              type={"under-retail"}
              value={badge?.is_under_retail}
            />
            <ItemCard.Badge type={"grade"} value={badge?.is_grade} />
            <ItemCard.Badge type={"secondhand"} value={badge?.is_secondhand} />
          </ItemCard.BadgeWrap>
        </ItemCard.ImgWrap>
        <ItemCard.Info>
          <ItemCard.Name className={styles.itemName}>{item_name}</ItemCard.Name>
          <ItemCard.PriceWrap className={styles.itemPrice}>
            {is_custody === 1 && (
              <ItemCard.Badge type={"custody"} value={is_custody} />
            )}
            <ItemCard.Price currency={price_type} value={display_price} />
          </ItemCard.PriceWrap>
        </ItemCard.Info>
      </ItemCard.Item>
    );
  });

  const itemCardItem2 = itemList2?.map((item) => {
    const { id, name_kor, price_type, image_path, is_custody, min_price } =
      item;

    return (
      <ItemCard.Item key={id}>
        <ItemCard.ImgWrap>
          <ItemCard.Img url={image_path} alt={name_kor} />
        </ItemCard.ImgWrap>
        <ItemCard.Info>
          <ItemCard.Name className={styles.itemName}>{name_kor}</ItemCard.Name>
          <ItemCard.PriceWrap className={styles.item1PriceWrap}>
            <ItemCard.Price value={min_price} className={styles.item1Price} />
            {price_type && (
              <p className={styles.item1PriceType}>{price_type}</p>
            )}
            {is_custody === 1 && <ItemCard.BadgeDirectDelivery />}
          </ItemCard.PriceWrap>
        </ItemCard.Info>
      </ItemCard.Item>
    );
  });

  return (
    <main className={styles.tradeMain}>
      <div>
        <ItemCard itemCardData={itemList1} grid={3} gap={5} lineClamp={2}>
          <ItemCard.List>{itemCardItem1}</ItemCard.List>
        </ItemCard>

        <ItemCard itemCardData={itemList2} grid={2} gap={10} lineClamp={1}>
          <ItemCard.List>{itemCardItem2}</ItemCard.List>
        </ItemCard>
      </div>
    </main>
  );
};

export default SampleItemCardPage;
