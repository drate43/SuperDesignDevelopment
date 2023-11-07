import { ItemCardProvider } from "./itemCardContext";
import ItemCardList from "./itemCardList";
import ItemCardItem from "./itemCardItem";
import {ImgWrap} from "@/components/atoms/itemCard-jl/itemCardImgWrap";
import {Img} from "@/components/atoms/itemCard-jl/itemCardImg";
import {BadgeWrap} from "@atoms/itemCard-jl/badgeWrap";
import {Badge} from "@atoms/itemCard-jl/badge";
import ItemBrand from "@atoms/itemCard-jl/itemBrand";
import ItemName from "@atoms/itemCard-jl/itemName";
import Price from "@atoms/itemCard-jl/price";
import BadgeDirectDelivery from "@atoms/itemCard-jl/badgeDirectDelivery";

export const ItemCardJL = Object.assign(ItemCardProvider, {
  List: ItemCardList,
  Item: ItemCardItem,
  ImgWrap: ImgWrap,
  Img: Img,
  BadgeWrap: BadgeWrap,
  Badge: Badge,
  BadgeDirectDelivery: BadgeDirectDelivery,
  brand: ItemBrand,
  ItemName: ItemName,
  Price: Price,
});

export default ItemCardJL;
