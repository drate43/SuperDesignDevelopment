import style from "./collapse.module.scss";
import React, { useEffect, useState } from "react";

interface ICollapse {
  title: string;
  content: string;
}

export const Collapse = ({ title, content }: ICollapse) => {
  const [isBodyOpened, setIsBodyOpened] = useState(false);
  const handleOnClickHeader = () => {
    setIsBodyOpened(!isBodyOpened);
  };
  return (
    <>
      <div className={style.collapseContainer}>
        <div
          className={`${style.collapseHeader} ${isBodyOpened && style.open}`}
          onClick={handleOnClickHeader}
        >
          <div>{title}</div>
          <div
            className={style[`icon-arrow__${isBodyOpened ? "top" : "bottom"}`]}
          ></div>
        </div>
        {isBodyOpened && (
          <div className={`${style.collapseBody}`}>{content}</div>
        )}
      </div>
    </>
  );
};
