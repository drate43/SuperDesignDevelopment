import Image from "next/image";

interface IImgProps {
  url: string;
  alt: string;
}
export const Img = ({ url, alt }: IImgProps) => {
  return (
    <Image
      src={url}
      alt={alt}
      width={0}
      height={12}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export const ImgType = (<Img url="" alt="" />).type
