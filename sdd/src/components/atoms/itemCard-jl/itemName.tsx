import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import { useItemCardContext } from "./itemCardContext";

interface IItemNameProps {
  children: string;
}

const ItemName = ({ children }: IItemNameProps) => {
  const { lineClamp } = useItemCardContext();

  return (
    <p
      className={`
        ${styles.itemName} 
        ${styles[`lineClamp${lineClamp}`]}
      `}
    >
      {children}
    </p>
  );
};

export default ItemName;
