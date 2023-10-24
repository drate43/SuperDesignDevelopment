import styles from "@atoms/itemCard-jl/itemCardList.module.scss";

interface IItemNameProps {
  lineClamp?: number; // default: 2
  children: string;
}

const ItemName = ({ lineClamp = 2, children }: IItemNameProps) => {
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
