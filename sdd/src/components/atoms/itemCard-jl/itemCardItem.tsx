import ImgWrap from "@atoms/itemCard-jl/imgWrap";
import Img from "@atoms/itemCard-jl/img";
import BadgeWrap from "@atoms/itemCard-jl/badgeWrap";
import Badge from "@atoms/itemCard-jl/badge";
import ItemName from "@atoms/itemCard-jl/itemName";
import BadgePrice from "@atoms/itemCard-jl/badgePrice";
import { IItemCard } from "@atoms/itemCard-jl/itemCardData";

interface IItemCardProps {
  data: IItemCard;
}

const ItemCardItem = ({
  data: {
    brand_color,
    image_path,
    item_name,
    badge,
    is_custody,
    display_price,
  },
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
      <ItemName>{item_name}</ItemName>
      <BadgePrice
        badgeType={"custody"}
        badgeValue={is_custody}
        price={display_price}
      />
    </li>
  );
};

export default ItemCardItem;
