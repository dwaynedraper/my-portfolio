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
          <footer className="max-w-3xl mx-auto px-6 py-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
            <span>© {new Date().getFullYear()} Dean Draper</span>
            <span>Built with Next.js</span>
          </footer>
        </Providers>
      </body>
    </html>
  )
}