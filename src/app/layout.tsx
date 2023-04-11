export const metadata = {
  title: "My Title",
};

import "./globals.css";
import Footer from "@app/components/Footer/Footer";
import Header from "../components/Header/Header";

export default function RootLayout({
  children,
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
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
