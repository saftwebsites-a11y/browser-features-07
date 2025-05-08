"use client"

import type React from "react"
import { useState, useRef } from "react"
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  Search,
  Shield,
  Star,
  Settings,
  Mail,
  Code,
  Github,
  Database,
  Zap,
  Plus,
  X,
  Moon,
  Sun,
  FileCode,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface BrowserHeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  currentUrl: string
  setCurrentUrl: (url: string) => void
  showDevTools: boolean
  setShowDevTools: (show: boolean) => void
  showEmailPanel: boolean
  setShowEmailPanel: (show: boolean) => void
  showDevPad: boolean
  setShowDevPad: (show: boolean) => void
  tabs: Array<{ id: string; title: string; url: string; favicon?: string }>
  addNewTab: () => void
  closeTab: (tabId: string) => void
  theme: string
  setTheme: (theme: string) => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

export default function BrowserHeader({
  activeTab,
  setActiveTab,
  currentUrl,
  setCurrentUrl,
  showDevTools,
  setShowDevTools,
  showEmailPanel,
  setShowEmailPanel,
  showDevPad,
  setShowDevPad,
  tabs,
  addNewTab,
  closeTab,
  theme,
  setTheme,
  sidebarCollapsed,
  setSidebarCollapsed,
}: BrowserHeaderProps) {
  const [searchText, setSearchText] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if it's a URL or a search query
    let url = searchText
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      if (url.includes(".") && !url.includes(" ")) {
        url = `https://${url}`
      } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`
      }
    }

    setCurrentUrl(url)
    if (activeTab === "home") {
      addNewTab()
    }
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    const tab = tabs.find((t) => t.id === tabId)
    if (tab) {
      setCurrentUrl(tab.url)
    }
  }

  return (
    <div className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
      <div className="flex items-center p-2 gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 mr-1"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <Menu className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              setActiveTab("home")
            }}
          >
            <Home className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleUrlSubmit} className="flex-1 flex items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              type="text"
              placeholder="Search or enter URL"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`pl-9 h-9 ${theme === "dark" ? "bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-600" : "bg-zinc-100 border-zinc-200 focus-visible:ring-zinc-300"}`}
              ref={searchInputRef}
              onFocus={() => {
                searchInputRef.current?.select()
              }}
            />
            <Shield className="absolute right-2.5 top-2.5 h-4 w-4 text-emerald-500" />
          </div>
        </form>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className="h-4 w-4" />
          </Button>
          <Button
            variant={showDevTools ? "secondary" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowDevTools(!showDevTools)}
          >
            <Code className="h-4 w-4" />
          </Button>
          <Button
            variant={showDevPad ? "secondary" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowDevPad(!showDevPad)}
          >
            <FileCode className="h-4 w-4" />
          </Button>
          <Button
            variant={showEmailPanel ? "secondary" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowEmailPanel(!showEmailPanel)}
          >
            <Mail className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
              3
            </Badge>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>History</DropdownMenuItem>
              <DropdownMenuItem>Downloads</DropdownMenuItem>
              <DropdownMenuItem>Bookmarks</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Extensions</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center px-2">
        <Tabs value={activeTab} onValueChange={handleTabClick} className="flex-1">
          <TabsList className={`h-9 p-0 ${theme === "dark" ? "bg-zinc-900" : "bg-white"}`}>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`flex items-center gap-2 px-3 h-9 relative group border-b-2 ${
                  activeTab === tab.id ? "border-blue-500 bg-white text-black" : "border-transparent"
                }`}
              >
                {tab.favicon && (
                  <div className="w-4 h-4 relative">
                    <Image src={tab.favicon || "/placeholder.svg"} alt="" width={16} height={16} className="w-4 h-4" />
                  </div>
                )}
                <span className="max-w-[120px] truncate">{tab.title}</span>
                {tabs.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 ml-1 opacity-0 group-hover:opacity-100 hover:opacity-100 absolute right-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeTab(tab.id)
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </TabsTrigger>
            ))}
            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={addNewTab}>
              <Plus className="h-4 w-4" />
            </Button>
          </TabsList>
        </Tabs>
      </div>

      <div
        className={`flex items-center px-2 py-1 ${theme === "dark" ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-600"} text-xs`}
      >
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="h-6 text-xs gap-1 px-2 text-black dark:text-white">
            <Github className="h-3 w-3" />
            Repos
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs gap-1 px-2 text-black dark:text-white">
            <Database className="h-3 w-3" />
            API
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs gap-1 px-2 text-black dark:text-white">
            <Zap className="h-3 w-3" />
            Performance
          </Button>
        </div>
      </div>
    </div>
  )
}
