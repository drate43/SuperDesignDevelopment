import React from "react";
import styles from "./item-card.module.scss";

const ItemCardBrand = ({ children }) => {
  return (
    <>
      <p className={styles.brand}>{children}</p>
    </>
  );
};

export default ItemCardBrand;
