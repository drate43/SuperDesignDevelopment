import React, { useState, useEffect } from "react";
import {
  IItemCard1,
  IItemCard2,
  itemCardData1,
  itemCardData2,
} from "@/hooks/item-card-jl/itemCardData";

const useItemCardJL = () => {
  const [itemList1, setItemList1] = useState<IItemCard1[]>([]);
  const [itemList2, setItemList2] = useState<IItemCard2[]>([]);

  useEffect(() => {
    setItemList1(itemCardData1);
    setItemList2(itemCardData2);
  }, []);

  return { itemList1, itemList2 };
};

export default useItemCardJL;
