import Image from "next/image";

interface IImgProps {
  url: string;
  alt: string;
}
const Img = ({ url, alt }: IImgProps) => {
  return (
    <Image
      src={url}
      alt={alt}
      width={0}
      height={0}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Img;
