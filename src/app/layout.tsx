import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://sushi-drive-night.vercel.app";

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
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SusHi Drive Night | SusHi Tech Tokyo 2026 Side Event",
    template: "%s | SusHi Drive Night",
  },
  description:
    "SusHi Tech Tokyo 2026公式サイドイベント。2026年4月28日、東京にて開催。日本の伝統文化体験、グローバルネットワーキング、次世代起業家との出会い。One night of real Japanese culture and global startup connections.",
  keywords: [
    "SusHi Tech Tokyo",
    "SusHi Tech Tokyo 2026",
    "SusHi Drive Night",
    "Tokyo startup event",
    "東京 スタートアップ イベント",
    "サイドイベント",
    "Japanese culture experience",
    "global networking Tokyo",
    "startup networking event",
    "東京 ネットワーキング",
    "tea ceremony event",
    "Japan tech event 2026",
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": BASE_URL,
      "ja": BASE_URL,
    },
  },
  openGraph: {
    title: "SusHi Drive Night — SusHi Tech Tokyo 2026 Side Event",
    description:
      "One night. Real culture. Global connections. April 28, 2026 in Tokyo. Experience authentic Japanese culture and connect with founders, investors, and next-gen entrepreneurs from 10+ countries.",
    type: "website",
    url: BASE_URL,
    siteName: "SusHi Drive Night",
    locale: "en_US",
    alternateLocale: "ja_JP",
    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: "SusHi Drive Night — A side event of SusHi Tech Tokyo 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SusHi Drive Night — SusHi Tech Tokyo 2026 Side Event",
    description:
      "One night. Real culture. Global connections. April 28, 2026 in Tokyo.",
    images: [
      {
        url: "/images/og.webp",
        alt: "SusHi Drive Night — A side event of SusHi Tech Tokyo 2026",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "SusHi Drive Night",
  description:
    "One night of real Japanese culture and global startup connections. A side event of SusHi Tech Tokyo 2026.",
  startDate: "2026-04-28",
  endDate: "2026-04-28",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Tokyo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "JP",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "SusHi Drive Night",
    url: BASE_URL,
  },
  offers: {
    "@type": "Offer",
    url: "https://lu.ma/nj5fmea8",
    availability: "https://schema.org/InStock",
  },
  image: `${BASE_URL}/images/og.webp`,
  url: BASE_URL,
  inLanguage: ["en", "ja"],
  superEvent: {
    "@type": "Event",
    name: "SusHi Tech Tokyo 2026",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
