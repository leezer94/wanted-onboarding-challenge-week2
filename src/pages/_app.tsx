import { AppProps } from 'next/app';
import Layout from '../components/@commons/Layout';

import '@/styles/index.css';

// 서버로 요청이 들어왔을때 가장 먼저 실행되는 컴포넌트 페이지를 적용할 `공통 레이아웃 역할`

// Component => pages 컴포넌트 component의 props로 보내주는 것들은 pages 에서 props로 받을 수 있음.

export default function MyApp({ Component, pageProps }: AppProps) {
  // pageProps {} 이거나 는 pre-load 시점에 필요한 페이지 data fetching method 기본 props들

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Next.js 에서는  `getServerSideProps` 나 `getInitialProps` 가 없을때 data 요청이 없으면 자동으로 static page 로 pre-rendering

// 위의 조건으로 SSR / CSR 여부를 결정하는듯
