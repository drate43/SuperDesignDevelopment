import styles from "./itemCardList.module.scss";
import ItemCard from "./itemCard";

interface IItemCardBadge {
  is_grade: 0 | 1;
  is_secondhand: 0 | 1;
  is_under_retail: 0 | 1;
}

export interface IItemCard {
  id: number;
  image_path: string;
  brand_name: string;
  brand_color: string;
  item_name: string;
  display_price: number;
  change_price_ratio: number;
  deep_link: string;
  badge: IItemCardBadge;
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
    <ul
      className={styles.itemCard}
      style={{ gridTemplateColumns: `repeat(${grid}, 1fr)`, gap: `${gap}px` }}
    >
      {list?.map((item) => {
        return (
          <ItemCard
            key={item.id}
            data={item}
            lineClamp={lineClamp}
            priceType={priceType}
          />
        );
      })}
    </ul>
  );
};

export default ItemCardList;
