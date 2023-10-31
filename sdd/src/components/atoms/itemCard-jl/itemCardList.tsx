import { ReactNode } from "react";
import styles from "./itemCardList.module.scss";
import { useItemCardContext } from "./itemCardContext";

interface ItemCardListProps {
  children?: ReactNode;
}

const ItemCardList = ({ children }: ItemCardListProps) => {
  const { grid, gap } = useItemCardContext();

  return (
    <ul
      className={styles.itemCard}
      style={{ gridTemplateColumns: `repeat(${grid}, 1fr)`, gap: `${gap}px` }}
    >
      {children}
    </ul>
  );
};

export default ItemCardList;
