import { ReactNode } from 'react';
import Head from 'next/head';
import Nav from './Navbar/Nav';

export default function Layout({
  children,
  title = 'This is the default title',
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Nav />
      {children}
    </>
  );
}
