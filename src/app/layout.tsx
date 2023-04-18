import ctl from '@netlify/classnames-template-literals';
import { Quicksand, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const metadata = {
  title: 'My Title'
};

const quicksand = Quicksand({ subsets: ['latin'], variable: '--quicksand' });

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['100', '300', '400', '500', '700', '900']
});

const apekMK3ExtraLight = localFont({
  src: '../assets/fonts/Apex-Mk3-ExtraLight.ttf',
  variable: '--apek-mk3-200'
});

const apekMK3ExtraMedium = localFont({
  src: '../assets/fonts/Apex-Mk3-Medium.ttf',
  variable: '--apek-mk3-500'
});

const fontsVariables = ctl(`
  ${apekMK3ExtraLight.variable}
  ${apekMK3ExtraMedium.variable}
  ${quicksand.variable}
  ${roboto.variable}
`);

import './globals.css';
import Footer from '@app/components/Footer/Footer';
import Header from '../components/Header/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={fontsVariables}>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
