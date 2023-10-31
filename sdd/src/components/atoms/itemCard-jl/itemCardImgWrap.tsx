import { ReactNode } from "react";
import styles from "@atoms/itemCard-jl/itemCardList.module.scss";

//  이 녀석이 굳이 컴포넌트로 필요할까?
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
