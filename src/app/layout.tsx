import "@/app/globals.css";
import { Inter, Newsreader } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

const description = "Your digital journal, built to treasure every memory you create.";

const svgLogo = (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.7001 7.62001V10.67H22.1801V15.24H23.7001V16.76H25.2301V18.29H20.6601V19.81H19.1301V21.33H23.7001V24.38H22.1801V27.43H23.7001V28.95H26.7501V27.43H28.2801V25.9H29.8001V22.86H31.3201V19.81H32.8501V12.19H31.3201V9.14001H29.8001V6.10001H28.2801V7.62001H23.7001Z"
      fill="#FFFFFF"
    />
    <path d="M28.2801 4.57001H26.7501V6.10001H28.2801V4.57001Z" fill="#FFFFFF" />
    <path d="M26.7501 3.04999H23.7001V4.56999H26.7501V3.04999Z" fill="#FFFFFF" />
    <path d="M23.7002 28.95H20.6602V30.48H23.7002V28.95Z" fill="#FFFFFF" />
    <path d="M23.7002 1.51999H20.6602V3.04999H23.7002V1.51999Z" fill="#FFFFFF" />
    <path
      d="M17.6101 28.95H16.0901V27.43H11.5101V28.95H9.99011V30.48H13.0401V32H20.6601V30.48H17.6101V28.95Z"
      fill="#FFFFFF"
    />
    <path d="M20.66 0H13.04V1.52H20.66V0Z" fill="#FFFFFF" />
    <path d="M11.5101 16.76H13.0401V18.29H14.5601V13.71H11.5101V16.76Z" fill="#FFFFFF" />
    <path d="M9.99006 27.43H6.94006V28.95H9.99006V27.43Z" fill="#FFFFFF" />
    <path d="M6.94004 25.9H5.42004V27.43H6.94004V25.9Z" fill="#FFFFFF" />
    <path
      d="M3.9001 22.86V25.9H5.4201V24.38H6.9401V22.86H8.4701V18.29H6.9401V16.76H5.4201V15.24H3.9001V13.71H5.4201V12.19H9.9901V10.67H11.5101V9.13999H13.0401V10.67H14.5601V9.13999H16.0901V6.09999H14.5601V4.56999H11.5101V3.04999H13.0401V1.51999H9.9901V3.04999H6.9401V4.56999H5.4201V6.09999H3.9001V9.13999H2.3701V12.19H0.850098V19.81H2.3701V22.86H3.9001Z"
      fill="#FFFFFF"
    />
  </svg>
);

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
        url: "data:image/svg+xml;base64," + btoa((svgLogo.props.children as React.ReactElement[]).map((child: React.ReactElement) => child.props.d).join("")),
        alt: "Wandr Logo - Your Digital Travel Journal",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wandr - Your Digital Travel Journal",
    description,
    images: [
      "data:image/svg+xml;base64," + btoa((svgLogo.props.children as React.ReactElement[]).map((child: React.ReactElement) => child.props.d).join("")),
    ],
    creator: "@shrvan",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className={`${inter.className} ${newsreader.className}`}>{children}</body>
    </html>
  );
}
