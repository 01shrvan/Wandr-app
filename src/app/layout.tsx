import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: "Wandr",
  description:
    "Wandr is a minimalist, privacy-first web app that lets you document, organize and cherish your travel experiences—without distractions.",
}

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] })

export const gilroyBold = localFont({
  src: [
    {
      path: "../../public/font/gilroy_bold.ttf",
      weight: "700",
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} antialiased min-h-screen bg-gradient-radial from-blue-300 via-purple-200 to-indigo-300 overflow-x-hidden`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,124,0.15)_0%,rgba(252,251,255,0)_100%)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,245,255,0.15)_0%,rgba(252,251,255,0)_100%)] pointer-events-none"></div>
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}

