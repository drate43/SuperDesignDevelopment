import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import { useItemCardContext } from "./itemCardContext";
import { CSSProperties } from "react";

interface IItemNameProps {
  children: string;
  className?: string;
}

const ItemName = ({ children, className }: IItemNameProps) => {
  const { lineClamp } = useItemCardContext();

  return (
    <p
      className={`${styles[`lineClamp${lineClamp}`]} ${className}`}
    >
      {children}
    </p>
  );
};

export default ItemName;
