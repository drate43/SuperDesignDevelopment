import { ItemCardProvider } from "./itemCardContext";
import ItemCardList from "./itemCardList";
import ItemCardItem from "./itemCardItem";
import { ImgWrap } from "@components/julee/itemCard/itemCardImgWrap";
import Img from "@components/julee/itemCard/itemCardImg";
import BadgeWrap from "@components/julee/_common/badge/badgeWrap";
import Badge from "@components/julee/_common/badge/badge";
import BadgeDirectDelivery from "@components/julee/_common/badge/badgeDirectDelivery";
import ItemCardInfo from "@components/julee/itemCard/itemCardInfo";
import ItemBrand from "@components/julee/_common/itemBrand/itemBrand";
import ItemName from "@components/julee/_common/itemName/itemName";
import PriceWrap from "@components/julee/_common/price/priceWrap";
import Price from "@components/julee/_common/price/price";

export const ItemCard = Object.assign(ItemCardProvider, {
  List: ItemCardList,
  Item: ItemCardItem,
  ImgWrap: ImgWrap,
  Img: Img,
  BadgeWrap: BadgeWrap,
  Badge: Badge,
  BadgeDirectDelivery: BadgeDirectDelivery,
  Info: ItemCardInfo,
  Name: ItemName,
  Brand: ItemBrand,
  PriceWrap: PriceWrap,
  Price: Price,
});

export default ItemCard;
