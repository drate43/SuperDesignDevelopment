interface IItemCardBadge {
  is_grade: 0 | 1;
  is_secondhand: 0 | 1;
  is_under_retail: 0 | 1;
}
export interface IItemCard1 {
  id: number;
  image_path: string;
  brand_name: string;
  brand_color: string;
  item_name: string;
  display_price: number;
  change_price_ratio: number;
  deep_link: string;
  badge: IItemCardBadge;
  is_custody: 0 | 1;
}

export interface IItemCard2 {
  id: string;
  name_kor: string;
  price_type: string;
  image_path: string;
  is_custody: 0 | 1;
  min_price: number;
}

export const itemCardData1: IItemCard1[] = [
  {
    id: 15662,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/18/1bb2d964-a7ad-4cad-8bb6-228ef16947f7.png/soldout/resize/564x564/optimize",
    brand_name: "조던",
    brand_color: "#F5F5F5",
    item_name: "에어 조던 1 레트로 로우 OG SP 트래비스 스캇 세일 앤 리저록",
    display_price: 80000,
    change_price_ratio: 6285.6,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F15662%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 1,
      is_secondhand: 1,
      is_under_retail: 1,
    },
    is_custody: 1,
  },
  {
    id: 95297,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/01/aa80e616-33bc-4bb6-808b-f4525cd8c13c.png/soldout/resize/564x564/optimize",
    brand_name: "조던",
    brand_color: "#F5F5F5",
    item_name: "에어 조던 1 레트로 로우 OG 블랙토",
    display_price: 166500,
    change_price_ratio: -17.8,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F95297%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 0,
      is_secondhand: 1,
      is_under_retail: 1,
    },
    is_custody: 0,
  },
  {
    id: 6520,
    image_path:
      "https://qa-img.soldout.co.kr/items/2022/11/04/a8844295-e714-4fb6-92eb-9fa7b613e94e.png/soldout/resize/564x564/optimize",
    brand_name: "나이키",
    brand_color: "#F5F5F5",
    item_name: "나이키 덩크 로우 레트로 화이트 블랙",
    display_price: 111000,
    change_price_ratio: 10.5,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F6520%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 0,
      is_secondhand: 0,
      is_under_retail: 1,
    },
    is_custody: 1,
  },
  {
    id: 5402965,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/18/57224398-5d83-42af-ab39-a319c2204a35.png/soldout/resize/564x564/optimize",
    brand_name: "아디다스",
    brand_color: "#F5F5F5",
    item_name: "아디다스 이지 폼 러너 카본",
    display_price: 129000,
    change_price_ratio: 78640.1,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F5402965%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 1,
      is_secondhand: 1,
      is_under_retail: 0,
    },
    is_custody: 1,
  },
  {
    id: 5403176,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/17/41674ae7-2654-4ae2-bb33-ca5e9902fe28.png/soldout/resize/564x564/optimize",
    brand_name: "아디다스",
    brand_color: "#F5F5F5",
    item_name: "아디다스 이지 슬라이드 슬레이트 마린",
    display_price: 85000,
    change_price_ratio: 18.1,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F5403176%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 0,
      is_secondhand: 1,
      is_under_retail: 1,
    },
    is_custody: 0,
  },
  {
    id: 21160,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/21/e176801f-0736-43d4-954d-9824fc762d10.png/soldout/resize/564x564/optimize",
    brand_name: "조던",
    brand_color: "#F5F5F5",
    item_name: "에어 조던 1 레트로 하이 OG 시카고 2022",
    display_price: 150000,
    change_price_ratio: 24025.4,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F21160%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 0,
      is_secondhand: 0,
      is_under_retail: 1,
    },
    is_custody: 1,
  },
  {
    id: 17978,
    image_path:
      "https://qa-img.soldout.co.kr/item_thumb/2023/08/10/d1fa9f23-ebc3-4b7a-b30d-593405753a5c.png/soldout/resize/564x564/optimize",
    brand_name: "아디다스",
    brand_color: "#F5F5F5",
    item_name: "아디다스 이지 부스트 350 V2 본 (2022/2023)",
    display_price: 70000,
    change_price_ratio: 32210.1,
    deep_link:
      "msoldoutapp://webview/type=1&style=2&header=0&url=https%3A%2F%2Fqa.soldout.co.kr%2Ftrade%2Fproduct%2F17978%3Fproduct_size_option_id%3D0%26open_size%3D0",
    badge: {
      is_grade: 1,
      is_secondhand: 1,
      is_under_retail: 1,
    },
    is_custody: 1,
  },
];

export const itemCardData2: IItemCard2[] = [
  {
    id: "5464581",
    name_kor: "아식스 젤 카야노 14 언어펙티드 실버 문",
    price_type: "즉시구매가",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/10/30/0e46f1fb-d3ec-49b6-9064-e1bee627f802.png/soldout/resize/564x564/optimize",
    is_custody: 0,
    min_price: 250000,
  },
  {
    id: "5461042",
    name_kor: "나이키 SB 덩크 로우 프로 위트 (2023)",
    price_type: "즉시구매가",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/10/16/113009bb-7af5-428e-80be-11d56239e5c0.png/soldout/resize/564x564/optimize",
    is_custody: 0,
    min_price: 170000,
  },
  {
    id: "15662",
    name_kor: "에어 조던 1 레트로 로우 OG SP 트래비스 스캇 세일 앤 리저록",
    price_type: "",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/08/18/1bb2d964-a7ad-4cad-8bb6-228ef16947f7.png/soldout/resize/564x564/optimize",
    is_custody: 1,
    min_price: 1306000,
  },
  {
    id: "5427322",
    name_kor: "아디다스 캠퍼스 00S 코어 콘 블랙 풋웨어 화이트",
    price_type: "즉시구매가",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/09/04/98a4a31c-3bd6-4348-b31c-59e98bd47849.png/soldout/resize/564x564/optimize",
    is_custody: 0,
    min_price: 230000,
  },
  {
    id: "3333",
    name_kor: "나이키 에어 포스 1 로우 '07 화이트",
    price_type: "",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/10/13/0f58e98b-c61d-43fb-9f0d-8768b69c2b23.png/soldout/resize/564x564/optimize",
    is_custody: 1,
    min_price: 110000,
  },
  {
    id: "5465355",
    name_kor: "슈프림 레더 숄더백 블랙 (23FW)",
    price_type: "즉시구매가",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/10/23/7857173d-76b8-4e88-836e-eac49d907c14.png/soldout/resize/564x564/optimize",
    is_custody: 0,
    min_price: 196000,
  },
  {
    id: "5468035",
    name_kor: "슈프림 x 스톤 아일랜드 데님 트러커 재킷 블랙 (23FW)",
    price_type: "즉시구매가",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/10/27/fab68f31-a11a-47d7-97f4-0dc61363ad27.png/soldout/resize/564x564/optimize",
    is_custody: 0,
    min_price: 1150000,
  },
  {
    id: "5428603",
    name_kor: "아디다스 가젤 볼드 크림 화이트 컬리지에이트 그린 (W)",
    price_type: "",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/09/19/3be4c356-6848-47bf-9926-795dd022e53e.png/soldout/resize/564x564/optimize",
    is_custody: 1,
    min_price: 133000,
  },
  {
    id: "1336",
    name_kor: "나이키 에어 포스 1 '07 WB 플랙스",
    price_type: "",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/09/12/c7c605e2-dbc8-4119-a47c-905ad926af7e.png/soldout/resize/564x564/optimize",
    is_custody: 1,
    min_price: 140000,
  },
  {
    id: "54389",
    name_kor: "아디다스 삼바 OG 블랙 화이트 검",
    price_type: "",
    image_path:
      "https://img.soldout.co.kr/item_thumb/2023/08/30/6a847f1a-65d9-47f1-bedb-f077c55311d8.png/soldout/resize/564x564/optimize",
    is_custody: 1,
    min_price: 129000,
  },
];
