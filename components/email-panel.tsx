"use client"

import { useState } from "react"
import { Search, Star, Inbox, Send, Archive, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface EmailPanelProps {
  theme: string
}

export default function EmailPanel({ theme }: EmailPanelProps) {
  const [activeFolder, setActiveFolder] = useState("inbox")
  const [selectedEmail, setSelectedEmail] = useState(0)

  const folders = [
    { id: "inbox", name: "Inbox", icon: Inbox, count: 3 },
    { id: "sent", name: "Sent", icon: Send },
    { id: "starred", name: "Starred", icon: Star },
    { id: "archive", name: "Archive", icon: Archive },
    { id: "trash", name: "Trash", icon: Trash2 },
  ]

  const labels = [
    { id: "code", name: "Code", color: "bg-blue-500" },
    { id: "deploy", name: "Deploy", color: "bg-green-500" },
    { id: "alerts", name: "Alerts", color: "bg-red-500" },
    { id: "github", name: "GitHub", color: "bg-purple-500" },
  ]

  const emails = [
    {
      id: 0,
      from: "GitHub",
      email: "noreply@github.com",
      subject: "New commit in repository",
      preview: "user pushed a new commit to main: Fix navigation bug",
      time: "10:25 AM",
      unread: true,
      labels: ["github"],
    },
    {
      id: 1,
      from: "Vercel",
      email: "notifications@vercel.com",
      subject: "Deployment completed",
      preview: "Your project was successfully deployed to production",
      time: "9:15 AM",
      unread: true,
      labels: ["deploy"],
    },
    {
      id: 2,
      from: "Error Monitor",
      email: "alerts@monitor.dev",
      subject: "Alert: API Endpoint Error",
      preview: "We detected an error in your /api/users endpoint with status 500",
      time: "Yesterday",
      unread: true,
      labels: ["alerts"],
    },
    {
      id: 3,
      from: "Sarah Developer",
      email: "sarah@team.dev",
      subject: "Code review requested",
      preview: "Can you take a look at my PR? I've implemented the new feature we discussed",
      time: "Yesterday",
      unread: false,
      labels: ["code"],
    },
    {
      id: 4,
      from: "NPM",
      email: "notifications@npmjs.com",
      subject: "Security vulnerability detected",
      preview: "A dependency in your project has a security vulnerability that needs attention",
      time: "May 2",
      unread: false,
      labels: ["alerts"],
    },
  ]

  return (
    <div
      className={`w-96 ${theme === "dark" ? "border-l border-zinc-800" : "border-l border-zinc-200"} flex flex-col h-full`}
    >
      <div className={`p-3 ${theme === "dark" ? "border-b border-zinc-800" : "border-b border-zinc-200"}`}>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            type="text"
            placeholder="Search emails"
            className={`pl-9 h-9 ${theme === "dark" ? "bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-600" : "bg-zinc-100 border-zinc-200 focus-visible:ring-zinc-300"}`}
          />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div
          className={`w-1/3 ${theme === "dark" ? "border-r border-zinc-800" : "border-r border-zinc-200"} overflow-y-auto`}
        >
          <div className="p-3">
            <h3 className="text-sm font-medium mb-2">Folders</h3>
            <div className="space-y-1">
              {folders.map((folder) => (
                <Button
                  key={folder.id}
                  variant={activeFolder === folder.id ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setActiveFolder(folder.id)}
                >
                  <folder.icon className="h-4 w-4 mr-2" />
                  {folder.name}
                  {folder.count && (
                    <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {folder.count}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="my-2" />

          <div className="p-3">
            <h3 className="text-sm font-medium mb-2">Labels</h3>
            <div className="space-y-1">
              {labels.map((label) => (
                <Button key={label.id} variant="ghost" size="sm" className="w-full justify-start">
                  <div className={`h-3 w-3 rounded-full ${label.color} mr-2`} />
                  {label.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/3 flex flex-col overflow-hidden">
          <div className="overflow-y-auto flex-1">
            {emails.map((email) => (
              <div
                key={email.id}
                className={`p-3 ${theme === "dark" ? "border-b border-zinc-800" : "border-b border-zinc-200"} cursor-pointer ${
                  selectedEmail === email.id ? (theme === "dark" ? "bg-zinc-800" : "bg-zinc-100") : ""
                } ${email.unread ? "font-medium" : ""}`}
                onClick={() => setSelectedEmail(email.id)}
              >
                <div className="flex items-center mb-1">
                  <span className="text-sm">{email.from}</span>
                  <span className={`ml-auto text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    {email.time}
                  </span>
                </div>
                <div className="text-sm mb-1">{email.subject}</div>
                <div className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} truncate`}>
                  {email.preview}
                </div>
                {email.labels.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {email.labels.map((labelId) => {
                      const label = labels.find((l) => l.id === labelId)
                      return label ? (
                        <div key={labelId} className={`${label.color} text-white text-xs px-2 py-0.5 rounded-full`}>
                          {label.name}
                        </div>
                      ) : null
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
