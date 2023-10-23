import React from "react";
import styles from "./item-card.module.scss";

const ItemCardPrice = ({ children }) => {
  return (
    <>
      <div className={styles.priceBox}>{children}</div>
    </>
  );
};

export default ItemCardPrice;
