import style from "@atoms/itemcard-mh/itemcard.module.scss";
import React from "react";
import Image from "next/image";

interface IBadge {
  title: string; // 글자 뱃지
  icon?: string; // 아이콘 + 글자 뱃지
  imagePath?: string; // 이미지 뱃지
  customStyle?: any;
}
const Badge = ({ title, icon, imagePath, customStyle }: IBadge) => {
  return (
    <div className={style["badge"]} style={customStyle}>
      {icon && <div className={"badge-icon"}>{icon}</div>}
      {title && !imagePath && <div className={"badge-title"}>{title}</div>}
      {imagePath && (
        <div className={"badge-image"}>
          <Image src={imagePath} alt={title} width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default Badge;
