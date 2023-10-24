import { ReactNode } from "react";
import styles from "@atoms/itemCard-jl/itemCardList.module.scss";

interface IImgWrapProps {
  children: ReactNode;
  bg?: string;
}
const ImgWrap = ({ children, bg = "#f5f5f5" }: IImgWrapProps) => {
  return (
    <div style={{ backgroundColor: bg }} className={styles.itemImgWrap}>
      {children}
    </div>
  );
};

export default ImgWrap;
