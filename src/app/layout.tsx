import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

export const metadata: Metadata = {
  title: "LawnSolutions | Weed Control & Lawn Treatment | Metro Area",
  description: "Professional weed control and fertilization designed for local soil. Fast results, reliable service, and no corporate runaround in the Greater Metropolitan Area.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
