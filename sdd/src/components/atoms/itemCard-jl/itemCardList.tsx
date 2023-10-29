import styles from "./itemCardList.module.scss";
import ItemCardItem from "./itemCardItem";
import { useItemCardContext } from "./itemCardContext";

const ItemCardList = () => {
  const { itemCardData, grid, gap } = useItemCardContext()
  
  return (
    <ul
      className={styles.itemCard}
      style={{ gridTemplateColumns: `repeat(${grid}, 1fr)`, gap: `${gap}px` }}
    >
      {itemCardData?.map((item) => {
        return (
          <ItemCardItem
            key={item.id}
            data={item}
          />
        );
      })}
    </ul>
  );
};

export default ItemCardList;
