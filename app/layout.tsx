import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Sidebar from "@/components/sidebar";
import Basket from "@/components/basket";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ziri EPOS",
  description: "Ziri EPOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col md:flex-row max-w-[1920px] mx-auto min-h-screen`}
      >
        <Sidebar />
        <div className="bg-gray-100/60 flex-1 px-4 py-5">
          <Header />
          {children}
        </div>
        <Basket />
      </body>
    </html>
  );
}
