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
  title: "سامانه حمل و نقل هوشمند دژپا | Dejpa Cargo",
  description: "سامانه حمل و نقل هوشمند دژپا - قابل اعتماد در حمل و نقل باری. ارائه خدمات حمل و نقل حرفه‌ای با پشتیبانی ۲۴/۷ و بیش از ۱۰۰۰ مشتری راضی",
  keywords: ["حمل و نقل", "باربری", "دژپا", "حمل بار", "logistics", "cargo", "transportation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
