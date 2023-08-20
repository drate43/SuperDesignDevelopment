import React, { useEffect, useState } from "react";
import style from "./collapseList.module.scss";
import { Collapse } from "../../atoms/collapse/collapse";

interface ICollapseList {}
export const CollapseList = () => {
  return (
    <div className={style["collapse-list"]}>
      <Collapse title={"title1"} content={"content1"} />
      <Collapse title={"title2"} content={"content2"} />
      <Collapse title={"title3"} content={"content3"} />
    </div>
  );
};
