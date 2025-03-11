import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";



const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Insurance Services LLC",
  description: "Prime Insurance Services LLC",
  icons: {
    icon: [
      {
        url: '/images/PrimeLogo.png',
        sizes: '42x42',
      },
      {
        url: '/images/PrimeLogo.png',
        sizes: '42x42',
      }
    ],
    apple: {
      url: '/images/PrimeLogo.png',
      sizes: '42x42',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${openSans.variable} font-sans`}
      >
        {children}
        
      </body>
    </html>
  );
}
