import { ReactNode } from "react";

interface PriceWrapProps {
  children?: ReactNode;
  className?: string;
}

const PriceWrap = ({ children, className = "" }: PriceWrapProps) => {
  return <div className={className}>{children}</div>;
};

export default PriceWrap;
