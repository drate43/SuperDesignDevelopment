import { HTMLAttributes, ReactNode } from "react";
import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import { useItemCardContext } from "./itemCardContext";

interface IItemNameProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const ItemName = ({ children, ...rest }: IItemNameProps) => {
  const { lineClamp } = useItemCardContext();

  return (
    <p
      className={`${styles[`lineClamp${lineClamp}`]}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default ItemName;
