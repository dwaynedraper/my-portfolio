import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "@/components/Navbar"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dean Draper",
  description: "Full-stack developer & photographer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}