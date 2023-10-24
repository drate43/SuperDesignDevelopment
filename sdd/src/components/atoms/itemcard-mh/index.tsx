import style from "./itemcard.module.scss";
import ListHeader from "@atoms/itemcard-mh/list-header";
import useItemList from "@atoms/itemcard-mh/useItemList";
import ItemList from "@atoms/itemcard-mh/item-list";

const ItemCardContainer = () => {
  const { itemList } = useItemList();

  return (
    <section className={style["list-container"]}>
      {/* 헤더 영역 */}
      <ListHeader title={"실시간 인기"} />
      {/* 아이템 카드 리스트 영역 */}
      <ItemList list={itemList} />
    </section>
  );
};

export default ItemCardContainer;
