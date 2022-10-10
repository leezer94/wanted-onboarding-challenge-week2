// next.config.js 는 typescript 나 Babel에 의해서 parsing 되지 않게 무조건 js 확장자 여야한다.
// 하지만, tsconfig.json 에서 타입체킹이 가능하다 ?

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
