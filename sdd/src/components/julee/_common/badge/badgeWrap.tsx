import { ReactNode } from "react";

interface IBadgeWrapProps {
  children?: ReactNode;
  className?: string;
}
const BadgeWrap = ({ children, className }: IBadgeWrapProps) => {
  return <div className={className}>{children}</div>;
};

export default BadgeWrap;
