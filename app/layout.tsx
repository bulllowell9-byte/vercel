import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stillwater-faith.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stillwater Faith | Prayer, Peace, and Daily Encouragement",
    template: "%s | Stillwater Faith",
  },
  description:
    "A peaceful Christian lifestyle tool for prayer for anxiety, morning prayer, Bible verses for stress, Christian encouragement, and prayer before sleep.",
  keywords: [
    "prayer for anxiety",
    "morning prayer",
    "Bible verses for stress",
    "Christian encouragement",
    "prayer before sleep",
    "peaceful Christian lifestyle",
    "prayer generator",
    "Christian morning routine",
  ],
  authors: [{ name: "Stillwater Faith" }],
  creator: "Stillwater Faith",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Stillwater Faith",
    description: "Prayer for anxiety, morning prayer, Bible verses for stress, and quiet Christian routines for everyday peace.",
    siteName: "Stillwater Faith",
    images: [
      {
        url: "/images/og-stillwater.png",
        width: 1200,
        height: 630,
        alt: "Stillwater Faith peaceful lifestyle journal and Bible scene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stillwater Faith",
    description: "Prayer for anxiety, morning prayer, Bible verses for stress, and quiet Christian routines for everyday peace.",
    images: ["/images/og-stillwater.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stillwater Faith",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
