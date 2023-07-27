import { ReactNode } from "react";
import style from "./dropdown-item.module.css";

export interface IDrondownItem {
  name: string;
  value: string | number;
}

interface IDropDownItemPros {
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export const DropDownItem = ({ children }: IDropDownItemPros) => {
  return (
    <>
      <li>{children}</li>
    </>
  );
};
