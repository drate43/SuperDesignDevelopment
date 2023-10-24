import Image from "next/image";
import styles from "./itemCardList.module.scss";
import Badge from "./badge";
import Img from "./img";
import BadgeWrap from "./badgeWrap";
import ImgWrap from "./imgWrap";
import Price from "./price";

export interface IItemCard {
  id: number;
  image_path: string;
  brand_name: string;
  brand_color: string;
  item_name: string;
  display_price: number;
  change_price_ratio: number;
  deep_link: string;
  badge: {
    is_grade: 0 | 1;
    is_secondhand: 0 | 1;
    is_under_retail: 0 | 1;
  };
  is_custody: 0 | 1;
}

export type TPriceType = "won" | "comma"; // 가격 타입

interface IItemCardListProps {
  list: IItemCard[];
  grid?: number;
  gap?: number;
  lineClamp?: number; // 말줄임 2 or 3
  priceType?: TPriceType;
}

const ItemCardList = ({
  list,
  grid = 3,
  gap = 5,
  lineClamp = 2,
  priceType = "won",
}: IItemCardListProps) => {
  return (
    <>
      <ul
        className={styles.itemCard}
        style={{ gridTemplateColumns: `repeat(${grid}, 1fr)`, gap: `${gap}px` }}
      >
        {list?.map((item) => {
          return (
            <li key={item.id}>
              <ImgWrap bg={item.brand_color}>
                <Img url={item.image_path} alt={item.item_name} />

                <BadgeWrap>
                  <Badge
                    type={"under-retail"}
                    value={item.badge.is_under_retail}
                  />
                  <Badge type={"grade"} value={item.badge.is_grade} />
                  <Badge type={"secondhand"} value={item.badge.is_secondhand} />
                </BadgeWrap>
              </ImgWrap>
              <p
                className={`
                  ${styles.itemName} 
                  ${styles[`lineClamp${lineClamp}`]}
                `}
              >
                {item.item_name}
              </p>
              <p className={styles.itemPrice}>
                <Badge type={"custody"} value={item.is_custody} />
                <Price type={priceType}>{item.display_price}</Price>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemCardList;
