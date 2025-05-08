"use client"

import { useState } from "react"
import {
  Home,
  Code,
  Github,
  Database,
  Mail,
  FileCode,
  Zap,
  Server,
  Settings,
  Terminal,
  Globe,
  Music,
  MessageSquare,
  Bookmark,
  Clock,
  Download,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

interface SidebarProps {
  collapsed: boolean
  setShowDevTools: (show: boolean) => void
  setShowEmailPanel: (show: boolean) => void
  setShowDevPad: (show: boolean) => void
  theme: string
}

export default function Sidebar({ collapsed, setShowDevTools, setShowEmailPanel, setShowDevPad, theme }: SidebarProps) {
  const [openSections, setOpenSections] = useState({
    navigation: false,
    devTools: false,
    apps: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  if (collapsed) {
    return (
      <TooltipProvider>
        <div
          className={`w-12 ${theme === "dark" ? "border-r border-zinc-800" : "border-r border-zinc-200"} flex flex-col items-center py-2 gap-1`}
        >
          <div className="mb-2">
            <Image
              src="/images/evo-logo.png"
              alt="EVO Browser"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Home className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setShowDevTools(true)}>
                <Code className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">DevTools</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Github className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Database className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Database</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setShowEmailPanel(true)}>
                <Mail className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Email</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setShowDevPad(true)}>
                <FileCode className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">DevPad</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Terminal className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Terminal</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Zap className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Performance</TooltipContent>
          </Tooltip>

          <div className="mt-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Settings className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    )
  }

  return (
    <div
      className={`w-56 ${theme === "dark" ? "border-r border-zinc-800 bg-zinc-900" : "border-r border-zinc-200 bg-white"} flex flex-col h-full`}
    >
      <div className="p-4 flex items-center gap-2">
        <Image src="/images/evo-logo.png" alt="EVO Browser" width={32} height={32} className="h-8 w-8" />
        <span className="font-semibold">EVO Browser</span>
      </div>

      <div className="px-3 py-2 overflow-y-auto flex-1">
        <Collapsible open={openSections.navigation} onOpenChange={() => toggleSection("navigation")} className="mb-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-between mb-1">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                <span className={`text-xs font-medium ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                  Navigation
                </span>
              </div>
              {openSections.navigation ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmarks
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Clock className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Downloads
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={openSections.devTools} onOpenChange={() => toggleSection("devTools")} className="mb-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-between mb-1">
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-2" />
                <span className={`text-xs font-medium ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                  Developer Tools
                </span>
              </div>
              {openSections.devTools ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-2">
            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setShowDevTools(true)}>
              <Code className="h-4 w-4 mr-2" />
              DevTools
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setShowDevPad(true)}>
              <FileCode className="h-4 w-4 mr-2" />
              DevPad
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Terminal className="h-4 w-4 mr-2" />
              Terminal
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Database className="h-4 w-4 mr-2" />
              Database
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Server className="h-4 w-4 mr-2" />
              API Monitor
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Zap className="h-4 w-4 mr-2" />
              Performance
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={openSections.apps} onOpenChange={() => toggleSection("apps")} className="mb-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-between mb-1">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span className={`text-xs font-medium ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                  Apps
                </span>
              </div>
              {openSections.apps ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-2">
            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => setShowEmailPanel(true)}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Music className="h-4 w-4 mr-2" />
              Music
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Globe className="h-4 w-4 mr-2" />
              VPN
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="mt-auto px-3 py-4">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <ShieldCheck className="h-4 w-4 mr-2" />
          Privacy & Security
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  )
}
