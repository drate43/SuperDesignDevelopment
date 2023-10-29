import { itemCard } from "./item-card";
import ItemCardHeader from "@atoms/item-card-dh/item-card-header";
import ItemCardContents from "@atoms/item-card-dh/item-card-contents";
import ItemCardList from "@atoms/item-card-dh/item-card-list";
import {
  ItemCardImage,
  ItemCardBrand,
  ItemCardTitle,
  ItemCardPrice,
  ItemCardBadge,
} from "@atoms/item-card-dh/item-card-list-item";

export const ItemCardDH = Object.assign(itemCard, {
  header: ItemCardHeader,
  contents: ItemCardContents,
  ListItem: ItemCardList,
  Image: ItemCardImage,
  InfoBrand: ItemCardBrand,
  InfoTitle: ItemCardTitle,
  InfoPrice: ItemCardPrice,
  InfoBadge: ItemCardBadge,
});

export default ItemCardDH;
