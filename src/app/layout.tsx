import { Quicksand, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@app/components/organisms/Footer/Footer';
import ctl from '@netlify/classnames-template-literals';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={fontsVariables}>
        <Analytics />
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
