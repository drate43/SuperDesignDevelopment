import Image from "next/image";
import styles from "./itemCardList.module.scss";

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
    is_updated: 0 | 1;
    is_under_retail: 0 | 1;
  };
  is_custody: 0 | 1;
}

type TPriceType = "won" | "comma"; // 가격 타입

interface IItemCardListProps {
  list: IItemCard[];
  lineClamp?: number; // 말줄임 2 or 3
  priceType?: TPriceType;
}

const comma = (price: number) => {
  if (price) {
    return Number(price).toLocaleString();
  } else {
    return "";
  }
};

const won = (price: number) => {
  if (price) {
    return comma(price) + "원";
  } else {
    return "";
  }
};

const displayPrice = (type: TPriceType, price: number) => {
  if (type === "won") {
    return won(price);
  } else if (type === "comma") {
    return comma(price);
  }
};

const ItemCardList = ({
  list,
  lineClamp = 2,
  priceType = "won",
}: IItemCardListProps) => {
  return (
    <>
      <ul className={styles.itemCard}>
        {list?.map((item) => {
          return (
            <li key={item.id}>
              <div style={{ backgroundColor: item.brand_color }}>
                <Image
                  src={item.image_path}
                  alt={item.item_name}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p
                className={`
                  ${styles.itemName} 
                  ${styles[`lineClamp${lineClamp}`]}
                `}
              >
                {item.item_name}
              </p>
              <p className={styles.itemPrice}>
                <span
                  className={`
                    ${styles.badge}
                    ${item.is_custody ? styles["custody"] : ""}
                  `}
                >
                  바로배송
                </span>
                <span>{displayPrice(priceType, item.display_price)}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemCardList;
