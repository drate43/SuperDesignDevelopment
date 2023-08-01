import { ReactNode } from "react";

export interface IDropDownItem {
  name: string;
  value: string | number;
}

interface IDropDownItemPros {
  name: string;
  value: string | number;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export const DropDownItem = ({
  name,
  value,
  children,
  onClick,
  ...props
}: IDropDownItemPros) => {
  //return <>{children ? <div>{children}</div> : <li>{value}</li>}</>;
  return <li>{value}</li>;
};
