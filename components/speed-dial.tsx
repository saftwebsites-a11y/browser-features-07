"use client"

import type React from "react"

import { Search, Github, Code, FileCode, Database, Server, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SpeedDialProps {
  setCurrentUrl: (url: string) => void
  setActiveTab: (tab: string) => void
  theme: string
}

export default function SpeedDial({ setCurrentUrl, setActiveTab, theme }: SpeedDialProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("search") as string

    if (query) {
      let url = query
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        if (url.includes(".") && !url.includes(" ")) {
          url = `https://${url}`
        } else {
          url = `https://www.google.com/search?q=${encodeURIComponent(url)}`
        }
      }

      setCurrentUrl(url)
      setActiveTab("browser")
    }
  }

  const shortcuts = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "Stack Overflow", icon: Code, url: "https://stackoverflow.com" },
    { name: "CodePen", icon: FileCode, url: "https://codepen.io" },
    { name: "MDN Docs", icon: BookOpen, url: "https://developer.mozilla.org" },
    { name: "Vercel", icon: Server, url: "https://vercel.com" },
    { name: "MongoDB", icon: Database, url: "https://mongodb.com" },
    { name: "React", icon: Code, url: "https://react.dev" },
    { name: "Next.js", icon: Server, url: "https://nextjs.org" },
  ]

  return (
    <div
      className={`flex-1 ${theme === "dark" ? "bg-zinc-900" : "bg-white"} flex flex-col items-center justify-center p-8`}
    >
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="mb-8">
          <Image src="/images/evo-logo.png" alt="EVO Browser" width={120} height={120} className="h-24 w-24" />
        </div>

        <form onSubmit={handleSearch} className="w-full max-w-xl mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
            <Input
              name="search"
              type="text"
              placeholder="Search the web or enter URL"
              className={`pl-10 h-12 text-lg ${theme === "dark" ? "bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-600" : "bg-zinc-100 border-zinc-200 focus-visible:ring-zinc-300"}`}
              autoFocus
            />
          </div>
        </form>

        <div className="grid grid-cols-4 gap-6 w-full max-w-2xl">
          {shortcuts.map((shortcut, index) => (
            <Button
              key={index}
              variant="outline"
              className={`flex flex-col items-center justify-center h-24 p-4 text-black dark:text-white ${theme === "dark" ? "hover:bg-zinc-800 border-zinc-700" : "hover:bg-zinc-100 border-zinc-200"}`}
              onClick={() => {
                setCurrentUrl(shortcut.url)
                setActiveTab("browser")
              }}
            >
              <shortcut.icon className="h-8 w-8 mb-2" />
              <span className="text-sm">{shortcut.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
