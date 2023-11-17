import styles from "@components/julee/_common/badge/badge.module.scss";

interface IBadgeProps {
  type: string;
  value: 0 | 1;
}

const Badge = ({ type, value }: IBadgeProps) => {
  let badgeName = "";
  let badgeClass = "";

  if (value) {
    switch (type) {
      case "under-retail":
        badgeName = "언더리테일";
        badgeClass = "badgeUnderRetail";
        break;
      case "grade":
        badgeName = "98점";
        badgeClass = "badgeGrade";
        break;
      case "secondhand":
        badgeName = "중고";
        badgeClass = "badgeSecondhand";
        break;
      case "custody":
        badgeName = "바로배송";
        badgeClass = "badgeCustody";
        break;
      default:
        break;
    }

    return (
      <span
        className={`
        ${styles.badge}
        ${styles[badgeClass]}
      `}
      >
        {badgeName}
      </span>
    );
  } else {
    return "";
  }
};

export default Badge;
