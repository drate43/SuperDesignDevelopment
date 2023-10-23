/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 호스트 이름 임시로 추가 - carousel 컴포넌트
  images: {
    unoptimized: true,
    domains: ["image.brandi.me", 'qa-img.soldout.co.kr'],
  },
};

module.exports = nextConfig;
