import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Vivek Shukla",
  description: "Portfolio website",
  icons: {
    icon: "/v-launcher.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
