import React from "react";

// 형태에 구애받지 않게 슬라이드를 구현하는 것이 중요한데
// 이걸 스크립트로 구현하는게 고민이 필요할 거 같음
type CarouselContextProps = {
  height: number;
  itemList: IItemList[] | [];
};

type IItemList = {
  alt: string;
  image_path: string;
};
type CarouselProps = CarouselContextProps & React.PropsWithChildren<{}>;

// Context 값 설정
const CarouselContext = React.createContext<CarouselContextProps>({
  height: 300,
  itemList: [],
});

// Context에 값을 넣어주기 위한 Provider 생성
const CarouselWrap = ({ height, itemList, children }: CarouselProps) => {
  const value = {
    height,
    itemList,
  };
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

// 다른 컴포넌트에서 공통으로 쓰기 위해서 context를 return
const useCarouselContext = () => {
  return React.useContext(CarouselContext);
};

export { CarouselWrap, useCarouselContext };
