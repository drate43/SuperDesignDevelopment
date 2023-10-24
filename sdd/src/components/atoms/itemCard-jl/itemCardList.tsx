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
    is_grade: 0 | 1;
    is_secondhand: 0 | 1;
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

interface IBadgeProps {
  type: string;
  value: 0 | 1;
}

const Badge = ({ type, value }: IBadgeProps) => {
  let badgeName = "";
  let badgeClass = "";

  if (value) {
    switch (type) {
      case "under-retail":
        badgeName = "언더리테일";
        badgeClass = "badgeUnderRetail";
        break;
      case "grade":
        badgeName = "98점";
        badgeClass = "badgeGrade";
        break;
      case "secondhand":
        badgeName = "중고";
        badgeClass = "badgeSecondhand";
        break;
      case "custody":
        badgeName = "바로배송";
        badgeClass = "badgeCustody";
        break;
      default:
        break;
    }

    return (
      <span
        className={`
        ${styles.badge}
        ${styles[badgeClass]}
      `}
      >
        {badgeName}
      </span>
    );
  } else {
    return "";
  }
};

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
                <div>
                  <Badge
                    type={"under-retail"}
                    value={item.badge.is_under_retail}
                  />
                  <Badge type={"grade"} value={item.badge.is_grade} />
                  <Badge type={"secondhand"} value={item.badge.is_secondhand} />
                </div>
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
                <Badge type={"custody"} value={item.is_custody} />
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
