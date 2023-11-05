import { nanoid } from "nanoid";
import React, {
  Children,
  JSXElementConstructor,
  ReactNode,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export type ListItemDirection = "horizontal" | "vertical";

type ListItemType = {
  children?: React.ReactNode;
};

const ListItem = ({ children }: ListItemType) => {
  return <div key={nanoid()}>{children}</div>;
};

interface IListProps<T> {
  itemDirection: ListItemDirection;
  loadMore?: Function;
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
  loadMore,
  header,
  dataSource,
  renderItem,
  footer,
}: IListProps<T>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  if (lastElementRef.current) {
    observerRef.current?.disconnect();
    observerRef.current?.observe(lastElementRef.current);
  }

  observerRef.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      //loadMore();
    }
  });

  useEffect(() => {}, []);
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
              const isLastItem = dataSource.length - 1 === index;

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
