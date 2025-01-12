import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import "./styles/style.css";
import { stack } from "../../styled-system/patterns/stack.mjs";

const inter = Gothic_A1({ subsets: ["latin"], weight: "800", display: "swap" });

export const metadata: Metadata = {
  title: "프론트엔드 개발자 김효중 포트폴리오",
  description: "안녕하세요. 웹 프론트엔드 개발자 김효중입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={stack({ gap: "6", padding: "4" })}>{children}</main>
      </body>
    </html>
  );
}
