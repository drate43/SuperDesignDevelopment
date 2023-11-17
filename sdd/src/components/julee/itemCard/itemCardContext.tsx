import React, { ReactNode, useContext } from "react";
import { IItemCard1, IItemCard2 } from "@/hooks/item-card-jl/itemCardData";

interface ItemCardContext {
  itemCardData: IItemCard1[] | IItemCard2[];
  grid: number;
  gap: number;
  lineClamp: 1 | 2; // 말줄임 2 or 3
  children?: ReactNode;
}

export const ItemCardContext = React.createContext<ItemCardContext>({
  itemCardData: [],
  grid: 3,
  gap: 5,
  lineClamp: 2,
});

export const ItemCardProvider = ({
  itemCardData,
  grid,
  gap,
  lineClamp,
  children,
}: ItemCardContext) => {
  return (
    <ItemCardContext.Provider value={{ itemCardData, grid, gap, lineClamp }}>
      {children}
    </ItemCardContext.Provider>
  );
};

export const useItemCardContext = () => useContext(ItemCardContext);
