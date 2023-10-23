import React from "react";
import styles from "./item-card.module.scss";

const ItemCardTitle = ({ children }) => {
  return (
    <>
      <p className={styles.productTitle}>{children}</p>
    </>
  );
};

export default ItemCardTitle;
