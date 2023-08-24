import React, { ReactNode, useState } from "react";
import { nanoid } from "nanoid";
import { DropDownItem, IDropDownItem } from "./dropdown-item";

export interface IDropDownProps {
  /**
   * 타이틀 내용
   */
  children?: ReactNode;
  items?: IDropDownItem[];
  onChanged?: (item: IDropDownItem) => void;
}

export const DropDown = ({
  children,
  onChanged,
  items,
  ...props
}: IDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as IDropDownItem);

  const handleItemOnClick = (selectedItem: IDropDownItem) => {
    if (onChanged) {
      onChanged(selectedItem);
    }
  };

  const handleDropDownMouseEnter = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleDropDownMouseLeave = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <div
        className="inline-block relative hover:cursor-pointer border border-slate-200 rounded-md"
        onMouseEnter={handleDropDownMouseEnter}
        onMouseLeave={handleDropDownMouseLeave}
      >
        <div className=" text-black">{children ?? "Hover me"}</div>
        {isOpen ? (
          <div
            className="absolute top-full rounded-md bg-white z-99 drop-shadow-md slide-fade-in"
            {...props}
          >
            <ul className="list-none p-1 text-black">
              {isOpen &&
                items?.map((item) => {
                  return (
                    <DropDownItem
                      key={nanoid()}
                      item={item}
                      onClick={handleItemOnClick}
                      className="rounded-md min-w-[80px] hover:bg-zinc-300"
                    />
                  );
                })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};
