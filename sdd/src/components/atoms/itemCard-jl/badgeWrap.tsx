import Badge from "./badge";
import styles from "@atoms/itemCard-jl/itemCardList.module.scss";
import { ReactNode } from "react";

interface IBadgeWrapProps {
  children: ReactNode;
}
const BadgeWrap = ({ children }: IBadgeWrapProps) => {
  return <div className={styles.itemImgBadge}>{children}</div>;
};

export default BadgeWrap;
