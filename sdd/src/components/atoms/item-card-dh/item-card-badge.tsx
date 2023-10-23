import React from "react";
import styles from "./item-card.module.scss";

const ItemCardBadge = ({ children }) => {
  return (
    <>
      <div className={styles.badgeBox}>{children}</div>
    </>
  );
};

export default ItemCardBadge;
