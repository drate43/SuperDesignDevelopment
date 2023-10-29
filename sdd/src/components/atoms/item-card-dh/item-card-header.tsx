import React from "react";
import styles from "./item-card.module.scss";
import { useItemCardContext } from "./item-card";
import useItemCard from "@/hooks/item-card-dh/useItemCard";

interface IItemCardHeaderProps {
  isMore?: boolean;
  handleClick?: () => void;
}

const ItemCardHeader = ({
  isMore = true,
  handleClick,
}: IItemCardHeaderProps) => {
  const { title, gap } = useItemCardContext();
  const { handleItemCardMoreClick } = useItemCard();

  return (
    <>
      <div className={styles.itemCardHeader}>
        <div className={styles.inner} style={{ padding: "0 " + gap + "px" }}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          {isMore && (
            <div className={styles.btnBox}>
              <button
                type={"button"}
                onClick={handleClick || handleItemCardMoreClick}
              >
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
