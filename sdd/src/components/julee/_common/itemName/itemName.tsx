import { ReactNode } from "react";
import styles from "@components/julee/_common/itemName/itemName.module.scss";
import { useItemCardContext } from "../../itemCard/itemCardContext";

interface IItemNameProps {
  children: ReactNode;
  className?: string;
}

const ItemName = ({ children, className = "" }: IItemNameProps) => {
  const { lineClamp } = useItemCardContext();

  return (
    <p
      className={`${styles.itemName} ${
        styles[`lineClamp${lineClamp}`]
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default ItemName;
