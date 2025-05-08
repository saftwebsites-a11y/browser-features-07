"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Globe, ShoppingCart, Code, Briefcase, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SessionManagerProps {
  onCreateSession: (session: any) => void
  onSelectSession: (session: any) => void
  onClose: () => void
  theme: string
}

export default function SessionManager({ onCreateSession, onSelectSession, onClose, theme }: SessionManagerProps) {
  const [activeTab, setActiveTab] = useState("existing")
  const [sessionName, setSessionName] = useState("")
  const [sessionType, setSessionType] = useState("default")

  const sessions = [
    {
      id: "1",
      name: "Desenvolvimento",
      type: "development",
      icon: <Code className="h-4 w-4" />,
      tabs: 5,
      lastUsed: "Hoje",
    },
    {
      id: "2",
      name: "Compras",
      type: "shopping",
      icon: <ShoppingCart className="h-4 w-4" />,
      tabs: 3,
      lastUsed: "Ontem",
    },
    {
      id: "3",
      name: "Trabalho",
      type: "work",
      icon: <Briefcase className="h-4 w-4" />,
      tabs: 8,
      lastUsed: "2 dias atrás",
    },
    {
      id: "4",
      name: "Navegação Geral",
      type: "default",
      icon: <Globe className="h-4 w-4" />,
      tabs: 2,
      lastUsed: "Agora",
    },
  ]

  const handleCreateSession = (e: React.FormEvent) => {
    e.preventDefault()
    const newSession = {
      id: Date.now().toString(),
      name: sessionName,
      type: sessionType,
      tabs: 0,
      lastUsed: "Agora",
    }
    onCreateSession(newSession)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className={`w-[500px] ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white"}`}>
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">Gerenciador de Sessões</CardTitle>
          <CardDescription>Crie ou selecione uma sessão de navegação</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="existing" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="existing">Sessões Existentes</TabsTrigger>
              <TabsTrigger value="new">Nova Sessão</TabsTrigger>
            </TabsList>
            <TabsContent value="existing">
              <div className="grid gap-3">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className={`p-3 rounded-lg cursor-pointer hover:bg-primary/10 ${theme === "dark" ? "border border-zinc-800" : "border"}`}
                    onClick={() => onSelectSession(session)}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                        {session.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium">{session.name}</h3>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {session.tabs} abas
                          </Badge>
                        </div>
                        <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                          Último uso: {session.lastUsed}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="new">
              <form onSubmit={handleCreateSession}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome da Sessão</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Trabalho, Compras, Desenvolvimento"
                      value={sessionName}
                      onChange={(e) => setSessionName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Tipo de Sessão</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={sessionType === "default" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setSessionType("default")}
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Navegação Geral
                      </Button>
                      <Button
                        type="button"
                        variant={sessionType === "development" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setSessionType("development")}
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Desenvolvimento
                      </Button>
                      <Button
                        type="button"
                        variant={sessionType === "work" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setSessionType("work")}
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        Trabalho
                      </Button>
                      <Button
                        type="button"
                        variant={sessionType === "shopping" ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setSessionType("shopping")}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Compras
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Nova Sessão
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
