import React, { useMemo } from "react";

type IItemCardList = {
  title: string;
  alt: string;
  image_path: string;
  item_info: {
    brand_name: string;
    rate: string;
    price: number;
  };
  isCoupon: boolean;
  isSale: boolean;
};

type ItemCardContextProps = {
  title: string;
  itemCardList: IItemCardList[] | [];
  size: number;
  gap: number;
};

type ItemCardProps = ItemCardContextProps & React.PropsWithChildren<{}>;

// Context 값 설정
const ItemCardContext = React.createContext<ItemCardContextProps>({
  title: "",
  itemCardList: [],
  size: 160,
  gap: 16,
});

// Context에 값을 넣어주기 위한 Provider 생성
// useMemo를 활용하여 캐싱해두면 리렌더링을 방지 할 수 있음
const itemCardBox = ({
  title,
  itemCardList,
  size,
  gap,
  children,
}: ItemCardProps) => {
  const value = useMemo(
    () => ({
      title,
      itemCardList,
      size,
      gap,
    }),
    [title, itemCardList, size, gap]
  );
  return (
    <ItemCardContext.Provider value={value}>
      {children}
    </ItemCardContext.Provider>
  );
};

// 다른 컴포넌트에서 공통으로 쓰기 위해서 context를 return
const useItemCardContext = () => {
  return React.useContext(ItemCardContext);
};

export { itemCardBox, useItemCardContext };
