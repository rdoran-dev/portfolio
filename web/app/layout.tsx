import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Doran",
  description: "Web Developer & IT Technican",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
      >
        <div className="h-[110vh] w-[20%] min-w-[110px] bg-white fixed overflow-hidden text-black flex flex-col justify-center items-center gap-8 text-xl">
          <p className="shadow-md w-[100%] h-[80px] flex flex-row justify-center items-center bg-black text-white">Home</p>
          <p className="shadow-md w-[100%] h-[80px] flex flex-row justify-center items-center">About</p>
          <p className="shadow-md w-[100%] h-[80px] flex flex-row justify-center items-center">Projects</p>
          <p className="shadow-md w-[100%] h-[80px] flex flex-row justify-center items-center">Contact</p>
        </div>
        <div className="w-[100%] flex flex-row">
          {/** Hidden div to support side bar */}
          <div className="w-[20%] min-w-[100px]" />
          <div className="w-[80%]">
            {children}
        </div>
        </div>
      </body>
    </html>
  );
}
