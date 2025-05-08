"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Eye, EyeOff, Search, Plus, Copy, Edit, Trash2, Lock, Globe, X, RefreshCw } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

interface PasswordManagerProps {
  onClose: () => void
  theme: string
}

export default function PasswordManager({ onClose, theme }: PasswordManagerProps) {
  const [activeTab, setActiveTab] = useState("passwords")
  const [searchQuery, setSearchQuery] = useState("")
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({})

  const savedPasswords = [
    {
      id: "1",
      site: "github.com",
      username: "developer@example.com",
      password: "••••••••••••",
      lastUsed: "Hoje",
    },
    {
      id: "2",
      site: "vercel.com",
      username: "developer@example.com",
      password: "••••••••••••",
      lastUsed: "Ontem",
    },
    {
      id: "3",
      site: "mongodb.com",
      username: "admin@example.com",
      password: "••••••••••••",
      lastUsed: "3 dias atrás",
    },
    {
      id: "4",
      site: "aws.amazon.com",
      username: "developer@example.com",
      password: "••••••••••••",
      lastUsed: "1 semana atrás",
    },
  ]

  const togglePasswordVisibility = (id: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredPasswords = savedPasswords.filter(
    (item) =>
      item.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className={`w-[600px] ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white"}`}>
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            <CardTitle>Gerenciador de Senhas</CardTitle>
          </div>
          <CardDescription>Gerencie suas senhas com segurança</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="passwords" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="passwords">Senhas Salvas</TabsTrigger>
              <TabsTrigger value="generator">Gerador de Senhas</TabsTrigger>
            </TabsList>
            <TabsContent value="passwords">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por site ou usuário"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-1">
                  {filteredPasswords.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg ${theme === "dark" ? "border border-zinc-800" : "border"}`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`p-2 rounded-full mr-3 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                          <Globe className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.site}</h3>
                          <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                            Último uso: {item.lastUsed}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div>
                          <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>Usuário</p>
                          <div className="flex items-center">
                            <p className="text-sm truncate">{item.username}</p>
                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>Senha</p>
                          <div className="flex items-center">
                            <p className="text-sm truncate">
                              {showPassword[item.id] ? "senha_segura_123" : item.password}
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 ml-1"
                              onClick={() => togglePasswordVisibility(item.id)}
                            >
                              {showPassword[item.id] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" className="h-7">
                          <Edit className="h-3 w-3 mr-1" />
                          Editar
                        </Button>
                        <Button variant="outline" size="sm" className="h-7">
                          <Trash2 className="h-3 w-3 mr-1" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Nova Senha
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="generator">
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <h3 className="font-medium mb-2">Senha Gerada</h3>
                  <div className="flex items-center">
                    <Input
                      value="Xj8#pL2@qR7!tZ9"
                      readOnly
                      className={`font-mono ${theme === "dark" ? "bg-zinc-700" : "bg-white"}`}
                    />
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Label>Comprimento</Label>
                      <span>16 caracteres</span>
                    </div>
                    <Slider defaultValue={[16]} max={32} min={8} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="uppercase">Letras maiúsculas (A-Z)</Label>
                      <Switch id="uppercase" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="lowercase">Letras minúsculas (a-z)</Label>
                      <Switch id="lowercase" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="numbers">Números (0-9)</Label>
                      <Switch id="numbers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="symbols">Símbolos (!@#$%)</Label>
                      <Switch id="symbols" defaultChecked />
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Salvar Esta Senha
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
