import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import ImgWrap from "@atoms/itemCard-jl/imgWrap";
import Img from "@atoms/itemCard-jl/img";
import BadgeWrap from "@atoms/itemCard-jl/badgeWrap";
import Badge from "@atoms/itemCard-jl/badge";
import ItemName from "@atoms/itemCard-jl/itemName";
import Price from "@atoms/itemCard-jl/price";
import { IItemCard, TPriceType } from "@atoms/itemCard-jl/itemCardList";

interface IItemCardProps {
  data: IItemCard;
  lineClamp: number;
  priceType: TPriceType;
}

const ItemCard = ({
  data: {
    brand_color,
    image_path,
    item_name,
    badge,
    is_custody,
    display_price,
  },
  lineClamp,
  priceType,
}: IItemCardProps) => {
  return (
    <li>
      <ImgWrap bg={brand_color}>
        <Img url={image_path} alt={item_name} />
        <BadgeWrap>
          <Badge type={"under-retail"} value={badge?.is_under_retail} />
          <Badge type={"grade"} value={badge?.is_grade} />
          <Badge type={"secondhand"} value={badge?.is_secondhand} />
        </BadgeWrap>
      </ImgWrap>
      <ItemName lineClamp={lineClamp}>{item_name}</ItemName>
      <p className={styles.itemPrice}>
        <Badge type={"custody"} value={is_custody} />
        <Price type={priceType}>{display_price}</Price>
      </p>
    </li>
  );
};

export default ItemCard;
