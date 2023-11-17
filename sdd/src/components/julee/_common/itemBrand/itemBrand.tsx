import styles from "@components/julee/_common/itemBrand/itemBrand.module.scss";

interface IItemBrandProps {
  children: React.ReactNode;
}

const ItemBrand = ({ children }: IItemBrandProps) => {
  return <p className={styles.itemBrand}>{children}</p>;
};

export default ItemBrand;
