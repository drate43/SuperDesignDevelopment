import { ReactNode } from "react";
import { useToggle } from "./useToggle";
import { setOriginalNode } from "typescript";

export interface IDropDownItem {
  name: string;
  value: string | number;
}

interface IDropDownItemPros {
  item: IDropDownItem;
  onClick?: (item: IDropDownItem) => void;
}

export const DropDownItem = ({
  item,
  onClick,
  ...props
}: IDropDownItemPros) => {
  const [toggled, setToggled] = useToggle(false);

  const handleOnClick = () => {
    setToggled();
    console.log(toggled);
  };
  return (
    <li
      onClick={handleOnClick}
      className={`rounded-md min-w-[80px] hover:bg-zinc-300 ${
        toggled ? "bg-slate-500" : "bg-slate-50"
      }
      `}
      {...props}
    >
      {item.name}
    </li>
  );
};
