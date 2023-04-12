import clsx from 'clsx';
import localFont from '@next/font/local';

export const metadata = {
  title: 'My Title'
};

const quickSandLight = localFont({
  src: '../assets/fonts/Quicksand-Light.ttf',
  variable: '--quicksand-300'
});

const quickSandRegular = localFont({
  src: '../assets/fonts/Quicksand-Regular.ttf',
  variable: '--quicksand-400'
});
const quickSandMedium = localFont({
  src: '../assets/fonts/Quicksand-Medium.ttf',
  variable: '--quicksand-500'
});

const quickSandSemiBold = localFont({
  src: '../assets/fonts/Quicksand-SemiBold.ttf',
  variable: '--quicksand-600'
});

const quickSandBold = localFont({
  src: '../assets/fonts/Quicksand-Bold.ttf',
  variable: '--quicksand-700'
});

const apekMK3ExtraLight = localFont({
  src: '../assets/fonts/Apex-Mk3-ExtraLight.otf',
  variable: '--apek-mk3-200'
});

const apekMK3ExtraMedium = localFont({
  src: '../assets/fonts/Apex-Mk3-Medium.otf',
  variable: '--apek-mk3-500'
});

const fontsVariables = clsx(
  apekMK3ExtraLight.variable,
  apekMK3ExtraMedium.variable,
  quickSandBold.variable,
  quickSandLight.variable,
  quickSandMedium.variable,
  quickSandRegular.variable,
  quickSandSemiBold.variable
);

import './globals.css';
import Footer from '@app/components/Footer/Footer';
import Header from '../components/Header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
