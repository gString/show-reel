import type { Metadata } from "next";
import { Gudea, Inter, Raleway, Silkscreen, Nova_Mono } from "next/font/google";
import "./ui/css/globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const dynamicParams = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Danfo&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet"/>
    </head>
    <body className={raleway.className}>{children}</body>
    </html>
  );
}
