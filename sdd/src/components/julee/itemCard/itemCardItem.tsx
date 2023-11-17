import React, {
  ReactNode,
  Children,
  ComponentType,
  isValidElement,
} from "react";
import ImgWrap from "@components/julee/itemCard/itemCardImgWrap";
import ItemCardInfo from "@components/julee/itemCard/itemCardInfo";

const ImgWrapType = (<ImgWrap />).type;
const ItemCardInfoType = (<ItemCardInfo />).type;

const getChild = (children: ReactNode, childType: ComponentType) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === childType)
    .splice(0, 2);
};

const ItemCardItem = ({ children }: { children?: ReactNode }) => {
  const imgWrap = getChild(children, ImgWrapType);
  const ItemCardInfo = getChild(children, ItemCardInfoType);

  return (
    <li>
      {imgWrap && <>{imgWrap}</>}
      {ItemCardInfo && <>{ItemCardInfo}</>}
    </li>
  );
};

export default ItemCardItem;
