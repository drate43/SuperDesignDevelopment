import { TPriceType } from "./itemCardList";

interface IPriceProps {
  type?: TPriceType; // default: comma
  children: number;
}

const comma = (price: number) => {
  if (price) {
    return Number(price).toLocaleString();
  } else {
    return "";
  }
};

const won = (price: number) => {
  if (price) {
    return comma(price) + "원";
  } else {
    return "";
  }
};

const displayPrice = (type: TPriceType, price: number) => {
  if (type === "won") {
    return won(price);
  } else if (type === "comma") {
    return comma(price);
  } else {
    return price;
  }
};

const Price = ({ type = "comma", children }: IPriceProps) => {
  const formattedPrice = displayPrice(type, children);

  return <span>{formattedPrice}</span>;
};

export default Price;
