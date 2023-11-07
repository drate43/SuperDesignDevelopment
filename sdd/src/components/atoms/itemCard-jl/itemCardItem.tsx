import React, { ReactNode, Children, ComponentType, isValidElement } from "react";
import { ImgWrapType } from "@atoms/itemCard-jl/itemCardImgWrap";
import { ImgType } from "@atoms/itemCard-jl/itemCardImg";
import { BadgeWrapType } from "@atoms/itemCard-jl/badgeWrap";
import { BadgeType } from "@atoms/itemCard-jl/badge";
import { log } from "console";

interface ItemCardItemProps {
  children?: ReactNode;
}

const getChild = (
  children: ReactNode,
  childType: ComponentType,
) => {
  const childrenArray = Children.toArray(children)
  console.log('childrenArray : ', childrenArray)
  const el = childrenArray
    .filter(
      child => isValidElement(child) && child.type === childType
    )
    .splice(0, 2)
    console.log(el) 
    return el
  //   .filter(
  //     child => isValidElement(child) && child.type === childType
  //   )
  //   .splice(0, 2)
}

const ItemCardItem = ({ children }: ItemCardItemProps) => {
  // TODO. imgWrap 안에 있는 녀석들은 어떻게 검증을 해야할까.. 해야할까 말아야할까 아오오 
  const imgWrap = getChild(children, ImgWrapType);
  const img = getChild(children, ImgType);
  const badgeWrap = getChild(children, BadgeWrapType);
  const badge = getChild(children, BadgeType);

  return (
    <li>
      {imgWrap && <>{imgWrap}</>}
    </li>
  );
};

export default ItemCardItem;
