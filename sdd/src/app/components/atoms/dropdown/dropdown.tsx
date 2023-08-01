import React, { isValidElement, Children, ReactNode, useState } from "react";
import { nanoid } from "nanoid";
import style from "./dropdown.module.scss";

import { DropDownItem, IDropDownItem } from "./dropdown-item";

export interface IDropDownTitleProps {
  children?: ReactNode;
}
export const DropDownTitle = ({ children }: IDropDownTitleProps) => {
  return <div>{children}</div>;
};

const DropDownTitleType = (<DropDownTitle />).type;

const getDropDownTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type !== DropDownTitleType
  );
};

type FunctionOnChanged = () => IDropDownItem;
export interface IDropDownProps {
  /**
   * 타이틀 내용
   */
  children?: ReactNode;
  items?: IDropDownItem[];
  onChanged?: FunctionOnChanged;
}

// const getDropDownItems = (children: ReactNode) => {
//   const childrenArray = Children.toArray(children);
//   return childrenArray.filter(
//     (child) => isValidElement(child) && child.type === DropdownItemType
//   );
// };

export const DropDown = ({
  children,
  onChanged,
  items,
  ...props
}: IDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as IDropDownItem);

  const dropDownTitle = getDropDownTitle(children);

  const testArr: IDropDownItem[] = [{ name: "1", value: "2" }];

  const handleItemOnClick = () => {
    if (onChanged) {
    }
  };

  const handleDropDownOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={style.menuContainer}>
        <div className={style.menuSelector}>
          <div className={style.selectBtn} onClick={handleDropDownOnClick}>
            <div className={style.buttonContent} style={{ color: "black" }}>
              {children}
            </div>
          </div>
        </div>

        {isOpen ? (
          <div className={style.dropdownMenuContainer}>
            <div className={style.dropdownMenu}>
              {isOpen &&
                items?.map((item) => {
                  return (
                    <DropDownItem
                      key={nanoid()}
                      name={item.name}
                      value={item.value}
                      onClick={handleItemOnClick}
                    />
                  );
                })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
