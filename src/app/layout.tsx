import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SusHi Drive Night",
  description:
    "One night. Real culture. Global connections. A side event of SusHi Tech Tokyo 2026.",
  openGraph: {
    title: "SusHi Drive Night",
    description:
      "One night. Real culture. Global connections. A side event of SusHi Tech Tokyo 2026.",
    type: "website",
    images: ["/images/og.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SusHi Drive Night",
    description:
      "One night. Real culture. Global connections. A side event of SusHi Tech Tokyo 2026.",
    images: ["/images/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${shipporiMincho.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
