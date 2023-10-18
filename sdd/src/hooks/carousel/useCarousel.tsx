import React, { useState, useEffect } from "react";

interface ICarouselList {
  alt: string;
  image_path: string;
}

function useCarousel() {
  const [carouselList, setCarouselList] = useState<ICarouselList[]>([]);

  // 임시 캐러셀 리스트
  useEffect(() => {
    // 원래면 해당 부분에서 api 호출하여 itemList에 리스트 값을 할당
    const itemList = [
      {
        alt: "최대 9만 포인트 적립",
        image_path:
          "https://image.brandi.me/home/banner/bannerImage_1323726_1694759390.jpg",
      },
      {
        alt: "계좌이체 적립시 최대 할인",
        image_path:
          "https://image.brandi.me/home/banner/bannerImage_1323726_1694759390.jpg",
      },
      {
        alt: "크림 배너",
        image_path:
          "https://image.brandi.me/home/banner/bannerImage_1323726_1694759390.jpg",
      },
    ];
    setCarouselList(itemList);
  }, []);

  return [carouselList];
}

export default useCarousel;
