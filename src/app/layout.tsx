import "@/app/globals.css"
import { Inter, Newsreader } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  )
}
