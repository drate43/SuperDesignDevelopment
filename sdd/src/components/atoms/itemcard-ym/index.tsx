import React, {
  Children,
  JSXElementConstructor,
  ReactNode,
  isValidElement,
  useState,
} from "react";

export type ListItemDirection = "horizontal" | "vertical";

type ListItemType = {
  children?: React.ReactNode;
};

const ListItem = ({ children }: ListItemType) => {
  return (
    <React.Fragment>
      <div>{children}</div>
    </React.Fragment>
  );
};

interface IListProps<T> {
  itemDirection: ListItemDirection;
  header?: React.JSX.Element;
  dataSource: T[];
  renderItem: (item: T, index?: Number) => React.ReactNode;
  footer?: React.ReactNode;
}

const getItemCardItem = (
  children: React.ReactNode,
  childType: string | JSXElementConstructor<any>
) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === childType)
    .slice(0, 2);
};

const ItemCards = <T,>({
  itemDirection,
  header,
  dataSource,
  renderItem,
  footer,
}: IListProps<T>) => {
  return (
    <React.Fragment>
      <div className="grid">
        {header}
        <ItemCards.item>
          <div
            className={`flex ${
              itemDirection === "horizontal" ? "flex-row" : "flex-col"
            }`}
          >
            {dataSource.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
        </ItemCards.item>

        {footer && <div>{footer}</div>}
      </div>
    </React.Fragment>
  );
};

ItemCards.item = ListItem;

export default ItemCards;
