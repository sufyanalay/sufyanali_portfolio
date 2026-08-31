import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const manrope = Manrope({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sufyan Ali — Full Stack Software Engineer",
  description:
    "Sufyan Ali builds scalable web applications, enterprise software, healthcare platforms, SaaS products and AI-powered systems using MERN and ASP.NET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

      </body>
    </html>
  );
}