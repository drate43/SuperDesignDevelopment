import { itemCard } from "./item-card";
import ItemCardHeader from "@atoms/item-card-dh/item-card-header";
import ItemCardContents from "@atoms/item-card-dh/item-card-contents";
import ItemCardListItem from "@atoms/item-card-dh/item-card-list-item";
import {
  ItemCardListImage,
  ItemCardBrand,
  ItemCardTitle,
  ItemCardPrice,
  ItemCardBadge,
} from "@atoms/item-card-dh/item-card-info";

export const ItemCardDH = Object.assign(itemCard, {
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
