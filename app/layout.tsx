import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";



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
        url: '/images/leftLogo.svg',
        sizes: '42x42',
      },
      {
        url: '/images/leftLogo.svg',
        sizes: '42x42',
      }
    ],
    apple: {
      url: '/images/leftLogo.svg',
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
      <head>
        <Script src="https://smtpjs.com/v3/smtp.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${josefinSans.variable} ${openSans.variable} font-sans`}
      >
        {children}
        
      </body>
    </html>
  );
}
