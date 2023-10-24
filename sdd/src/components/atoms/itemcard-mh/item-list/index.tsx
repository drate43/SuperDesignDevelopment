import style from "@atoms/itemcard-mh/itemcard.module.scss";
import ItemCard from "@atoms/itemcard-mh/item-card";
import { IItemCardProps } from "@atoms/itemcard-mh/useItemList";

interface IItemListProps {
  list: IItemCardProps[];
}

const ItemList = ({ list }: IItemListProps) => {
  if (!list || list.length === 0) return;
  return (
    <div className={style["itemCard-list"]}>
      {list.map((item: IItemCardProps) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
