import styles from "@atoms/itemCard-jl/itemCardList.module.scss";

interface IItemBrandProps {
  children: string;
}

const ItemBrand = ({ children }: IItemBrandProps) => {
  return <p className={styles.itemBrand}>{children}</p>;
};

export default ItemBrand;
