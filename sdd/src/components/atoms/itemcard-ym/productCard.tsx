import { nanoid } from "nanoid";
import Image from "next/image";
import { Children, JSXElementConstructor, isValidElement } from "react";

interface ProductImageProps {
  path?: string;
  name?: string;
  height?: number;
  width?: number;
}
const ProductImage = ({ path, name, height, width }: ProductImageProps) => {
  return (
    <>
      <Image src={path ?? ""} alt={name ?? ""} height={height} width={width} />
    </>
  );
};
const ProductImageType = (<ProductImage />).type;

interface BrandNameProps {
  name?: string;
}
const BrandName = ({ name }: BrandNameProps) => {
  return (
    <>
      <div className="text-xs text-neutral-700">{name}</div>
    </>
  );
};
const BrandNameType = (<BrandName />).type;

interface ProductNameProps {
  name?: string;
}
const ProductName = ({ name }: ProductNameProps) => {
  return (
    <>
      <div className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-28">
        {name}
      </div>
    </>
  );
};
const ProductNameType = (<ProductName />).type;

interface ProductSalePercentProps {
  rate?: string;
}
const ProductSalePercent = ({ rate }: ProductSalePercentProps) => {
  return <div className="text-xs text-amber-800">{rate}</div>;
};

interface ProductPriceProps {
  price?: number;
}
const ProductPrice = ({ price }: ProductPriceProps) => {
  return <div className="text-sm">{price}원</div>;
};

type ProductPriceWrapProps = {
  children?: React.ReactNode;
};
const ProductPriceWrap = ({ children }: ProductPriceWrapProps) => {
  return (
    <>
      <div className="flex flex-row gap-1 items-center font-bold">
        {children}
      </div>
    </>
  );
};
const ProductPriceWrapType = (<ProductPriceWrap />).type;

const PriceArea = Object.assign(ProductPriceWrap, {
  SalePercent: ProductSalePercent,
  Price: ProductPrice,
});

type ProductMainProps = {
  children?: React.ReactNode;
};

const getProductCardImage = (children: React.ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ProductImageType)
    .slice(0, 2);
};

const getBrandNames = (children: React.ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BrandNameType)
    .slice(0, 2);
};

const getProductNames = (children: React.ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ProductNameType)
    .slice(0, 2);
};

const getProductPriceWrap = (children: React.ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === ProductPriceWrapType
    )
    .slice(0, 2);
};

const getChild = (
  children: React.ReactNode,
  childType: string | JSXElementConstructor<any>
) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === childType)
    .slice(0, 2);
};

const ProductMain = ({ children }: ProductMainProps) => {
  const productImage = getChild(children, ProductImageType);
  const brandName = getChild(children, BrandNameType);
  const productName = getProductNames(children);
  const productPriceWrap = getProductPriceWrap(children);

  return (
    <div className="grid grid-flow-row" key={nanoid()}>
      {productImage && <div>{productImage}</div>}
      {brandName && <div>{brandName}</div>}
      {productName && <div>{productName}</div>}
      {productPriceWrap && <div>{productPriceWrap}</div>}
    </div>
  );
};

const ProductCard = Object.assign(ProductMain, {
  Image: ProductImage,
  Brand: BrandName,
  Name: ProductName,
  PriceArea: PriceArea,
});

export default ProductCard;
