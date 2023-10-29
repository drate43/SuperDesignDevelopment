import { ItemCardProvider } from "./itemCardContext";
import ItemCardList from "./itemCardList";

export const ItemCard = Object.assign(ItemCardProvider, {
  ItemCardList: ItemCardList,
});

export default ItemCard;