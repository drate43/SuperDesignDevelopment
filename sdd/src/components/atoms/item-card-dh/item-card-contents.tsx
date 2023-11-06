/** @jsxImportSource @emotion/react */
import React, { memo, ReactNode } from "react";
import { css } from "@emotion/react";
import styles from "./item-card.module.scss";
import ItemCardDH from "@atoms/item-card-dh";
import { useItemCardContext } from "@atoms/item-card-dh/item-card";

interface IItemCardContentsProps {
  children?: ReactNode;
}

const ContentsBox = ({ children, gap }) => {
  return (
    <div
      className={styles.itemCardContents}
      css={css`
        padding: 0 ${gap}px;
      `}
    >
      {children}
    </div>
  );
};

const ContentsList = ({ children, gap }) => {
  return (
    <ul
      className={styles.list}
      css={css`
        width: calc(100% + ${gap * 2}px);
        margin: 0 ${-gap}px;
        padding: 0 ${gap}px;
      `}
    >
      {children}
    </ul>
  );
};

// children이 없을 경우 기본 ListItem을 보여줌
const ItemCardContents = ({ children }: IItemCardContentsProps) => {
  const { gap } = useItemCardContext();

  return (
    <>
      <ContentsBox gap={gap}>
        <ContentsList gap={gap}>
          {children || <ItemCardDH.ListItem />}
        </ContentsList>
      </ContentsBox>
    </>
  );
};

export default memo(ItemCardContents);
