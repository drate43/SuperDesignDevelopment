import React from "react";
import styles from "./item-card.module.scss";
import { useItemCardContext } from "./item-card-box";

interface IItemCardHeaderProps {
  isMore?: boolean;
  handleClick?: () => void;
}

const clickTest = () => {
  console.log("더보기 클릭");
};

const ItemCardHeader = ({
  isMore = true,
  handleClick,
}: IItemCardHeaderProps) => {
  const { title, gap } = useItemCardContext();

  return (
    <>
      <div className={styles.itemCardHeader}>
        <div className={styles.inner} style={{ padding: "0 " + gap + "px" }}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          {isMore && (
            <div className={styles.btnBox}>
              <button type={"button"} onClick={handleClick || clickTest}>
                더보기
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCardHeader;
