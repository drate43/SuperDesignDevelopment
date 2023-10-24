import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import Badge from "@atoms/itemCard-jl/badge";
import Price from "@atoms/itemCard-jl/price";
import { TPriceType } from "@atoms/itemCard-jl/itemCardList";

interface IBadgePriceProps {
  badgeType: string;
  badgeValue: 0 | 1;
  priceType: TPriceType;
  price: number;
}

const BadgePrice = ({
  badgeType,
  badgeValue,
  priceType,
  price,
}: IBadgePriceProps) => {
  return (
    <p className={styles.itemPrice}>
      {badgeValue === 1 && <Badge type={badgeType} value={badgeValue} />}
      <Price type={priceType}>{price}</Price>
    </p>
  );
};

export default BadgePrice;
