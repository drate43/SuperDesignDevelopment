import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import Badge from "@atoms/itemCard-jl/badge";
import Price from "@atoms/itemCard-jl/price";
import { useItemCardContext } from "./itemCardContext";

interface IBadgePriceProps {
  badgeType: string;
  badgeValue: 0 | 1;
  price: number;
}

const BadgePrice = ({
  badgeType,
  badgeValue,
  price,
}: IBadgePriceProps) => {
  const { priceType } = useItemCardContext();

  return (
    <p className={styles.itemPrice}>
      {badgeValue === 1 && <Badge type={badgeType} value={badgeValue} />}
      <Price type={priceType}>{price}</Price>
    </p>
  );
};

export default BadgePrice;
