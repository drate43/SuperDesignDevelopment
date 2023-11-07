import React, { HTMLAttributes } from "react";
import { TPriceType } from "./itemCardContext";

interface IPriceProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TPriceType; // default: comma
  value: number;
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

const Price = ({ type = "comma", value, ...rest }: IPriceProps) => {
  const formattedPrice = displayPrice(type, value);

  return <span {...rest}>{formattedPrice}</span>;
};

export default Price;
