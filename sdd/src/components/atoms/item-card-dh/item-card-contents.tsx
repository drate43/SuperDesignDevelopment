import React, { memo, ReactNode } from "react";
import styles from "./item-card.module.scss";
import ItemCardDH from "@atoms/item-card-dh";
import { useItemCardContext } from "@atoms/item-card-dh/item-card";

interface IItemCardContentsProps {
  children?: ReactNode;
}

// children이 없을 경우 기본 ListItem을 보여줌
const ItemCardContents = ({ children }: IItemCardContentsProps) => {
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
          {children || <ItemCardDH.ListItem />}
        </ul>
      </div>
    </>
  );
};

export default memo(ItemCardContents);
