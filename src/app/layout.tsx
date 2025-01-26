import "@/app/globals.css";
import { Inter, Newsreader } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], display: "swap" });

const description = "Transform your travel memories into beautifully curated stories.";

export const metadata: Metadata = {
  title: "Wandr - Your Digital Travel Journal",
  description,
  keywords: ["travel journal", "digital memories", "travel diary", "photo gallery", "travel stories"],
  authors: [{ name: "shrvan" }],
  creator: "shrvan",
  metadataBase: new URL("https://wandr-eight.vercel.app"),
  openGraph: {
    type: "website",
    title: "Wandr - Your Digital Travel Journal",
    description,
    siteName: "Wandr",
    url: "https://wandr-eight.vercel.app",
    images: [
      {
        url: "/images/logo.svg",
        width: 200,
        height: 50,
        alt: "Wandr Logo - Your Digital Travel Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandr - Your Digital Travel Journal",
    description,
    images: ["/images/logo.svg"],
    creator: "@shrvan",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  // manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={newsreader.className}>{children}</body>
    </html>
  );
}
