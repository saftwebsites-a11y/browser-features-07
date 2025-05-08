"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface MainBrowserProps {
  currentUrl: string
  activeTab: string
  updateTabInfo: (title: string) => void
  theme: string
}

export default function MainBrowser({ currentUrl, activeTab, updateTabInfo, theme }: MainBrowserProps) {
  const hasUpdatedRef = useRef(false)

  useEffect(() => {
    // Reset the ref when URL or active tab changes
    hasUpdatedRef.current = false
  }, [currentUrl, activeTab])

  useEffect(() => {
    // Only update tab info once per URL/tab combination to prevent update loops
    if (!hasUpdatedRef.current) {
      // In a real browser, we would get the page title from the iframe
      // For this demo, we'll just extract a title from the URL
      try {
        const url = new URL(currentUrl)
        const domain = url.hostname.replace("www.", "")
        const title = domain.charAt(0).toUpperCase() + domain.slice(1)
        updateTabInfo(title)
        hasUpdatedRef.current = true
      } catch (error) {
        // Handle invalid URLs gracefully
        updateTabInfo("New Tab")
        hasUpdatedRef.current = true
      }
    }
  }, [currentUrl, activeTab, updateTabInfo])

  return (
    <div className="flex-1 bg-white overflow-auto">
      {/* This would be an iframe in a real browser implementation */}
      <div className="w-full h-full">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Browser content"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
