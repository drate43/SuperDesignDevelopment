import { ReactNode } from "react";

export interface IDropDownItem {
  name: string;
  value: string | number;
}

interface IDropDownItemPros {
  item: IDropDownItem;
  children?: ReactNode;
  onClick?: (item: IDropDownItem) => void;
  className: string;
}

export const DropDownItem = ({
  item,
  children,
  onClick,
  className,
  ...props
}: IDropDownItemPros) => {
  return (
    <li
      onClick={(e) => {
        if (onClick) onClick(item);
      }}
      className={className}
      {...props}
    >
      {item.name}
    </li>
  );
};
