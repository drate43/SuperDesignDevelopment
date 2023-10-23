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
}

interface IItemCardListProps {
  list: IItemCard[];
  lineClamp?: number; // 말줄임 2 or 3
}

const ItemCardList = ({ list, lineClamp = 2 }: IItemCardListProps) => {
  const lineClampStyle = lineClamp ? styles[`lineClamp${lineClamp}`] : "";

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
              <p className={`${styles.itemName} ${lineClampStyle}`}>
                {item.item_name}
              </p>
              <p className={styles.itemPrice}>{item.display_price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemCardList;
