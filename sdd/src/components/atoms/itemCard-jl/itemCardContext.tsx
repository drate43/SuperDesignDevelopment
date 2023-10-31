import React, { ReactNode, useContext } from "react";
import { IItemCard, IItemCard1 } from "@atoms/itemCard-jl/itemCardData";

interface ItemCardContext {
  itemCardData: IItemCard[] | IItemCard1[];
  grid: number;
  gap: number;
  lineClamp: 2 | 3; // 말줄임 2 or 3
  priceType: TPriceType;
  children?: ReactNode;
}

export type TPriceType = "won" | "comma"; // 가격 타입

export const ItemCardContext = React.createContext<ItemCardContext>({
  itemCardData: [],
  grid: 3,
  gap: 5,
  lineClamp: 2,
  priceType: "won",
});

export const ItemCardProvider = ({
  itemCardData,
  grid,
  gap,
  lineClamp,
  priceType,
  children,
}: ItemCardContext) => {
  return (
    <ItemCardContext.Provider
      value={{ itemCardData, grid, gap, lineClamp, priceType }}
    >
      {children}
    </ItemCardContext.Provider>
  );
};

export const useItemCardContext = () => useContext(ItemCardContext);
