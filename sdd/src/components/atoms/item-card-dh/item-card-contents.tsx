import React, { ReactNode } from "react";
import styles from "./item-card.module.scss";
import ItemCardDH from "@atoms/item-card-dh";
import { useItemCardContext } from "@atoms/item-card-dh/item-card";

interface IItemCardContentsProps {
  children?: ReactNode;
  isCustom?: boolean;
}

// isCustom값이 true일 경우 해당 리스트를 커스텀 가능
const ItemCardContents = ({
  children,
  isCustom = false,
}: IItemCardContentsProps) => {
  const { gap } = useItemCardContext();

  return (
    <>
      <div
        className={styles.itemCardContents}
        style={{ padding: "0 " + gap + "px" }}
      >
        <ul
          className={styles.list}
          style={{
            width: `calc(100% + ${gap * 2}px)`,
            margin: "0 " + -gap + "px",
            padding: "0 " + gap + "px",
          }}
        >
          {isCustom ? children : <ItemCardDH.ListItem />}
        </ul>
      </div>
    </>
  );
};

export default ItemCardContents;
