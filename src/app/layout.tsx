import "./globals.css";
import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";

const alata = Alata({ subsets: ["latin"], weight: "400" });
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Loopside - VR",
  description: "Loopside landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alata.className} ${josefinSans.className}`}>
        {children}
      </body>
    </html>
  );
}
