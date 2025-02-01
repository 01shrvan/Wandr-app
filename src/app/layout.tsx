import "@/app/globals.css"
import { Inter, Newsreader } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" })

const description = "Your digital journal, built to treasure every memory you create."

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
        url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTIzLjcwMDEgNy42MjAwMVYxMC42N0gyMi4xODAxVjE1LjI0SDIzLjcwMDFWMTYuNzZIMjUuMjMwMVYxOC4yOUgyMC42NjAxVjE5LjgxSDE5LjEzMDFWMjEuMzNIMjMuNzAwMVYyNC4zOEgyMi4xODAxVjI3LjQzSDIzLjcwMDFWMjguOTVIMjYuNzUwMVYyNy40M0gyOC4yODAxVjI1LjkwSDI5LjgwMDFWMjIuODZIMzEuMzIwMVYxOS44MUgzMi44NTAxVjEyLjE5SDMxLjMyMDFWOS4xNDAxSDI5LjgwMVY2LjEwMDFIMjguMjgwMVY3LjYyMDFIMjMuNzAwMVoiCiAgICAgICAgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoIGQ9Ik0yOC4yODAxIDQuNTcwMUgyNi43NTAxVjYuMTAwMUgyOC4yODAxVjQuNTcwMVoiIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNMjYuNzUwMSAzLjA0OTk5SDIzLjcwMDFWNC41Njk5SDI2Ljc1MDFWMz4uMDQ5OTlaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTIzLjcwMDIgMjguOTVIMjAuNjYwMlYzMC40OEgyMy43MDAyVjI4Ljk1WiIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoIGQ9Ik0yMy43MDAyIDEuNTE5OTlIMjAuNjYwMlYzLjA0OTlIMjMuNzAwMlYxLjUxOTk5WiIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTE3LjYxMDEgMjguOTVIMTYuMDkwMVYyNy40M0gxMS41MTAxVjI4Ljk1SDkuOTkwMTFWMzAuNDhIMTMuMDQwMVYzMkgxOS42NjAxVjMwLjQ4SDE3LjYxMDFWMjguOTVaIgogICAgICAgIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNMjAuNjYgMEgxMy4wNFYxLjUySDE5LjY2VjBaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTExLjUxMDEgMTYuNzZIMTMuMDQwMVYxOC4yOUgxNC41NjAxVjEzLjcxSDExLjUxMDFWMTYuNzZaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTkuOTkwNiAyNy40M0g2Ljk0MDRWMjguOTVIOC45OTAwMVYyNy40M1oiIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNNi45NDA0IDI1LjloLTEuNTEwNFYyNy40M0g2Ljk0MDRWMjUuOTBaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMy45MDAxIDIyLjg2VjI1LjkwSDUuNDIwMVYyNC4zOEg2Ljk0MDFWMjIuODZIOC40NzAxVjE4LjI5SDYuOTQwMVYxNi43Nkg1LjQyMDFWMTUuMjRIMy45MDAxVjEzLjcxSDUuNDIwMVYxMi4xOUg5Ljk5MDFWOS42N0gxMS41MTAxVjkuMTM5OTdIMTMuMDQwMVYxMC42N0gxNC41NjAxVjkuMTM5OTdIMTYuMDkwMVY2LjA5OTlIMTQuNTYwMVY0LjU2OTlIMTEuNTEwMVYzLjA0OTlIMTMuMDQwMVYxLjUxOTk5SDkuOTkwMVYzLjA0OTlINi45NDAxVjQuNTY5OUg1LjQyMDFWNi4wOTk5SDMuOTAwMVY5LjEzOTk3SDIuMzcwMVYxMi4xOUgwLjg1MDEyVjE5LjgxSDIuMzcwMVYyMi44NkgzLjkwMDFaIgogICAgICAgIGZpbGw9IiNGRkZGRkYiIC8+Cjwvc3ZnPgo=",
        alt: "Wandr Logo - Your Digital Travel Journal",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wandr - Your Digital Travel Journal",
    description,
    images: ["data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTIzLjcwMDEgNy42MjAwMVYxMC42N0gyMi4xODAxVjE1LjI0SDIzLjcwMDFWMTYuNzZIMjUuMjMwMVYxOC4yOUgyMC42NjAxVjE5LjgxSDE5LjEzMDFWMjEuMzNIMjMuNzAwMVYyNC4zOEgyMi4xODAxVjI3LjQzSDIzLjcwMDFWMjguOTVIMjYuNzUwMVYyNy40M0gyOC4yODAxVjI1LjkwSDI5LjgwMDFWMjIuODZIMzEuMzIwMVYxOS44MUgzMi44NTAxVjEyLjE5SDMxLjMyMDFWOS4xNDAxSDI5LjgwMVY2LjEwMDFIMjguMjgwMVY3LjYyMDFIMjMuNzAwMVoiCiAgICAgICAgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoIGQ9Ik0yOC4yODAxIDQuNTcwMUgyNi43NTAxVjYuMTAwMUgyOC4yODAxVjQuNTcwMVoiIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNMjYuNzUwMSAzLjA0OTk5SDIzLjcwMDFWNC41Njk5SDI2Ljc1MDFWMz4uMDQ5OTlaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTIzLjcwMDIgMjguOTVIMjAuNjYwMlYzMC40OEgyMy43MDAyVjI4Ljk1WiIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoIGQ9Ik0yMy43MDAyIDEuNTE5OTlIMjAuNjYwMlYzLjA0OTlIMjMuNzAwMlYxLjUxOTk5WiIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTE3LjYxMDEgMjguOTVIMTYuMDkwMVYyNy40M0gxMS41MTAxVjI4Ljk1SDkuOTkwMTFWMzAuNDhIMTMuMDQwMVYzMkgxOS42NjAxVjMwLjQ4SDE3LjYxMDFWMjguOTVaIgogICAgICAgIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNMjAuNjYgMEgxMy4wNFYxLjUySDE5LjY2VjBaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTExLjUxMDEgMTYuNzZIMTMuMDQwMVYxOC4yOUgxNC41NjAxVjEzLjcxSDExLjUxMDFWMTYuNzZaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGggZD0iTTkuOTkwNiAyNy40M0g2Ljk0MDRWMjguOTVIOC45OTAwMVYyNy40M1oiIGZpbGw9IiNGRkZGRkYiIC8+CiAgICA8cGF0aCBkPSJNNi45NDA0IDI1LjloLTEuNTEwNFYyNy40M0g2Ljk0MDRWMjUuOTBaIiBmaWxsPSIjRkZGRkZGIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMy45MDAxIDIyLjg2VjI1LjkwSDUuNDIwMVYyNC4zOEg2Ljk0MDFWMjIuODZIOC40NzAxVjE4LjI5SDYuOTQwMVYxNi43Nkg1LjQyMDFWMTUuMjRIMy45MDAxVjEzLjcxSDUuNDIwMVYxMi4xOUg5Ljk5MDFWOS42N0gxMS41MTAxVjkuMTM5OTdIMTMuMDQwMVYxMC42N0gxNC41NjAxVjkuMTM5OTdIMTYuMDkwMVY2LjA5OTlIMTQuNTYwMVY0LjU2OTlIMTEuNTEwMVYzLjA0OTlIMTMuMDQwMVYxLjUxOTk5SDkuOTkwMVYzLjA0OTlINi45NDAxVjQuNTY5OUg1LjQyMDFWNi4wOTk5SDMuOTAwMVY5LjEzOTk3SDIuMzcwMVYxMi4xOUgwLjg1MDEyVjE5LjgxSDIuMzcwMVYyMi44NkgzLjkwMDFaIgogICAgICAgIGZpbGw9IiNGRkZGRkYiIC8+Cjwvc3ZnPgo="],
    creator: "@shrvan",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className={`${inter.className} ${newsreader.className}`}>{children}</body>
    </html>
  )
}

