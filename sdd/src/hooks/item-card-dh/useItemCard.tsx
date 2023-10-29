import React, { useState, useEffect } from "react";

interface IItemCardList {
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
}

function useItemCard() {
  const [itemCardList, setItemCardList] = useState<IItemCardList[]>([]);

  // 아이템 카드 더보기 버튼 클릭 이벤트
  const handleItemCardMoreClick = () => {
    console.log("더보기 클릭");
  };

  // 임시 캐러셀 리스트
  useEffect(() => {
    // 원래면 해당 부분에서 api 호출하여 itemList에 리스트 값을 할당
    // setTimeout으로 api 흉내만..
    const itemList = [
      {
        title: "꿈의 거처 앨범 1",
        alt: "꿈의 거처 앨범1",
        image_path:
          "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
        item_info: {
          brand_name: "르아브",
          rate: "20%",
          price: 19000,
        },
        isCoupon: true,
        isSale: true,
      },
      {
        title: "꿈의 거처 앨범 2",
        alt: "꿈의 거처 앨범2",
        image_path:
          "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
        item_info: {
          brand_name: "트란지아",
          rate: "25%",
          price: 129000,
        },
        isCoupon: false,
        isSale: true,
      },
      {
        title: "꿈의 거처 앨범 3",
        alt: "꿈의 거처 앨범3",
        image_path:
          "https://cdn-image.prizm.co.kr/goods/20231011/8e9b01e7-73fa-4f87-8b5d-1371869a2dde.jpeg?im=Resize,width=512",
        item_info: {
          brand_name: "르메르",
          rate: "30%",
          price: 29000,
        },
        isCoupon: true,
        isSale: true,
      },
    ];
    setTimeout(() => setItemCardList(itemList), 1000);
  }, []);

  return {
    itemCardList,
    handleItemCardMoreClick,
  };
}

export default useItemCard;
