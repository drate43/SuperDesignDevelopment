import React, { HTMLAttributes } from "react";
import { currencyType } from "@/hooks/item-card-jl/itemCardData";

interface IPriceProps extends HTMLAttributes<HTMLSpanElement> {
  currency?: currencyType;
  value: number;
}

const comma = (price: number) => {
  if (price) {
    return Number(price).toLocaleString();
  } else {
    return "";
  }
};

const displayPrice = (type: currencyType, price: number) => {
  if (price) {
    if (type === "KRW") {
      return comma(price) + "원";
    } else if (type === "USD") {
      return "$" + comma(price);
    } else if (type === "JPY") {
      return "￥" + comma(price);
    } else {
      return comma(price);
    }
  } else {
    return "";
  }
};

const Price = ({ currency = "KRW", value, ...rest }: IPriceProps) => {
  const formattedPrice = displayPrice(currency, value);

  return <span {...rest}>{formattedPrice}</span>;
};

export default Price;
