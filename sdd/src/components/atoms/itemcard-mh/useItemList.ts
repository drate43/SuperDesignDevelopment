import { useEffect, useState } from "react";
import { IItem, ITEM_DUMMY } from "@atoms/itemcard-mh/dummyData";

export interface IItemCardProps {
  id: string;
  image_path: string;
  name_eng: string;
  brand_name_kor: string;
  name_kor: string;
  price: string;
  deep_link: string;
  is_coupon: number;
}

export default function useItemList() {
  const [itemList, setItemList] = useState<IItemCardProps[]>([]);

  useEffect(() => {
    const formattedItemList = ITEM_DUMMY.list.map((item: IItem) => {
      return {
        id: item.id,
        image_path: item.image_path,
        name_eng: item.name_eng,
        brand_name_kor: item.brand_name_kor,
        name_kor: item.name_kor,
        price: item.price,
        deep_link: item.deep_link,
        is_coupon: item.is_coupon,
      };
    });
    setItemList(formattedItemList);
  }, []);

  return { itemList, setItemList };
}
