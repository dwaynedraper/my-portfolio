"use client"

import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <nav className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center">
      <span className="font-bold text-lg">Dean Draper</span>
      <div className="flex gap-6 items-center">
        <a href="#about" className="text-sm hover:underline">About</a>
        <a href="#projects" className="text-sm hover:underline">Projects</a>
        <button
          suppressHydrationWarning
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="text-sm border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {resolvedTheme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}