import Image from "next/image";

const BadgeDirectDelivery = () => {
  return (
    <Image
      src={'/images/badge/badge-delivery-text.png'}
      alt={'바로배송'}
      width={56}
      height={12}
    />
  );
}

export default BadgeDirectDelivery;