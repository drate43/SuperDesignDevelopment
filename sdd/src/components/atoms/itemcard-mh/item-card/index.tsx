import style from "@atoms/itemcard-mh/itemcard.module.scss";
import Image from "next/image";
import React from "react";
import Badge from "@atoms/itemcard-mh/badge";
import { IItemCardProps } from "@atoms/itemcard-mh/useItemList";
/**
 * Feature:
 *  아이템 카드 클릭 시 아이템 상세로 이동
 */
const ItemCard = ({
  id,
  image_path,
  name_eng,
  brand_name_kor,
  name_kor,
  price,
  deep_link,
  is_coupon,
}: IItemCardProps) => {
  return (
    <div className={style["itemCard"]}>
      <div className={style["image-wrap"]}>
        <Image src={image_path} alt={name_eng} fill />
      </div>
      <div className={style["info-wrap"]}>
        <div className={style["brand"]}>{brand_name_kor}</div>
        <div className={style["title"]}>{name_kor}</div>
        <div className={style["price-wrap"]}>
          <div className={style["discount"]}>50%</div>
          <div className={style["price"]}>{price}</div>
        </div>
        <div className={style["sub-info"]}></div>
      </div>
      {/* 뱃지 여러개 데이터에 따라...달라질덧..?*/}
      {/*  뱃지 여부 데이터 정리해서 <Badge> map 돌리는 식으로 */}
      <div className={style["badge-wrap"]}>
        <Badge title={"단독구성"} />
        {is_coupon === 1 ? (
          <Badge
            title={"쿠폰"}
            icon={"🎫"}
            customStyle={{ color: "black", backgroundColor: "var(--Gray20)" }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
