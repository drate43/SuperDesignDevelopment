import { ReactNode } from "react";

interface ItemCardItemProps {
  children?: ReactNode;
}

const ItemCardItem = ({ children }: ItemCardItemProps) => {
  return <li>{children}</li>;
};

export default ItemCardItem;
