import React from "react";
import styles from "./item-card.module.scss";
import { useItemCardContext } from "@atoms/item-card-dh/item-card-box";

const ItemCardListImage = ({ children }) => {
  const { size } = useItemCardContext();

  return (
    <>
      {/*이미지 영역*/}
      <div
        className={styles.imgBox}
        style={{ width: size + "px", height: size + "px" }}
      >
        {children}
      </div>
    </>
  );
};

export default ItemCardListImage;
