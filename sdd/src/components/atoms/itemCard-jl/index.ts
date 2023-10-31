import { ItemCardProvider } from "./itemCardContext";
import ItemCardList from "./itemCardList";
import ItemCardItem from "./itemCardItem";
import ImgWrap from "@atoms/itemCard-jl/imgWrap";
import Img from "@atoms/itemCard-jl/img";
import BadgeWrap from "@atoms/itemCard-jl/badgeWrap";
import Badge from "@atoms/itemCard-jl/badge";
import ItemBrand from "@atoms/itemCard-jl/itemBrand";
import ItemName from "@atoms/itemCard-jl/itemName";
import BadgePrice from "@atoms/itemCard-jl/badgePrice";

export const ItemCardJL = Object.assign(ItemCardProvider, {
  ItemCardList: ItemCardList,
  ItemCardItem: ItemCardItem,
  ImgWrap: ImgWrap,
  Img: Img,
  BadgeWrap: BadgeWrap,
  Badge: Badge,
  ItemBrand: ItemBrand,
  ItemName: ItemName,
  BadgePrice: BadgePrice,
});

export default ItemCardJL;
