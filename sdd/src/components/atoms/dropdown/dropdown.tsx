import React, { isValidElement, Children, ReactNode, useState } from "react";
import style from "./drowdown.module.scss";

import { DropDownItem, IDrondownItem } from "./dropdown-item";

export interface IDropDownTitleProps {
  children?: ReactNode;
}
export const DropDownTitle = ({ children }: IDropDownTitleProps) => {
  return <div>{children}</div>;
};

type FunctionOnChanged = () => IDrondownItem;
export interface IDropDownProps {
  /**
   * 타이틀 내용
   */
  children?: ReactNode;
  onChanged?: FunctionOnChanged;
}

const DropdownItemType = (<DropDownItem />).type;
const DropDownTitleType = (<DropDownTitle />).type;

const getDropDownTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type !== DropDownTitleType
  );
};
const getDropDownItems = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DropdownItemType
  );
};

export const DropDown = ({ children, onChanged, ...props }: IDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as IDrondownItem);

  const dropDownTitle = getDropDownTitle(children);
  const dropDownItems = getDropDownItems(children);

  const handleDropDownOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menuContainer">
        <div className={"menuSelector"}>
          <div className={"selectBtn"} onClick={handleDropDownOnClick}>
            <div className={"buttonContent"}>{"test"}</div>
          </div>
        </div>

        {isOpen ? (
          <div className="dropdownMenuContainer">
            <div className="dropdownMenu">
              {/* <ul>{dropDownItems}</ul> */}
              <ul>{"123"}</ul>
              <ul>{"123"}</ul>
              <ul>{"123"}</ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
