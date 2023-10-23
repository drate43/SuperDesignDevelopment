import { itemCardBox } from "./item-card-box";
import ItemCardHeader from "@atoms/item-card-dh/item-card-header";
import ItemCardContents from "@atoms/item-card-dh/item-card-contents";
import ItemCardListItem from "@atoms/item-card-dh/item-card-list-item";
import ItemCardListImage from "@atoms/item-card-dh/item-card-image";
import ItemCardBrand from "@atoms/item-card-dh/item-card-brand";
import ItemCardTitle from "@atoms/item-card-dh/item-card-title";
import ItemCardPrice from "@atoms/item-card-dh/item-card-price";
import ItemCardBadge from "@atoms/item-card-dh/item-card-badge";

export const ItemCardDH = Object.assign(itemCardBox, {
  header: ItemCardHeader,
  contents: ItemCardContents,
  ListItem: ItemCardListItem,
  Image: ItemCardListImage,
  InfoBrand: ItemCardBrand,
  InfoTitle: ItemCardTitle,
  InfoPrice: ItemCardPrice,
  InfoBadge: ItemCardBadge,
});

export default ItemCardDH;
