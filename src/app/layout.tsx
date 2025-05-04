// src/app/layout.tsx
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({ subsets: ["latin"], weight: ["400","700"], variable: "--font-roboto" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
    <body className="antialiased">
    <Navbar />          {/* ← here */}
    {children}
    <Analytics />
    </body>
    </html>
  )
}
