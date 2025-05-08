"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  Settings,
  Key,
  Shield,
  Bell,
  LogOut,
  Laptop,
  Smartphone,
  Tablet,
  Clock,
  Download,
  Lock,
  RefreshCw,
  Database,
  Cloud,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface UserPanelProps {
  user: any
  onLogout: () => void
  onClose: () => void
  theme: string
}

export default function UserPanel({ user, onLogout, onClose, theme }: UserPanelProps) {
  const [activeTab, setActiveTab] = useState("account")

  const devices = [
    { id: 1, name: "Windows PC", type: "laptop", lastActive: "Agora", current: true },
    { id: 2, name: "MacBook Pro", type: "laptop", lastActive: "1 hora atrás" },
    { id: 3, name: "iPhone 13", type: "smartphone", lastActive: "3 horas atrás" },
    { id: 4, name: "iPad Pro", type: "tablet", lastActive: "2 dias atrás" },
  ]

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "laptop":
        return <Laptop className="h-4 w-4" />
      case "smartphone":
        return <Smartphone className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      default:
        return <Laptop className="h-4 w-4" />
    }
  }

  return (
    <div
      className={`fixed inset-y-0 right-0 w-96 ${theme === "dark" ? "bg-zinc-900 border-l border-zinc-800" : "bg-white border-l border-zinc-200"} shadow-lg z-50 overflow-y-auto`}
    >
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">EVO ID</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Fechar
        </Button>
      </div>

      <div className="p-6 flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-4">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-medium">{user.name}</h3>
        <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>{user.email}</p>
        <Badge className="mt-2">{user.profileType === "developer" ? "Desenvolvedor" : user.profileType}</Badge>
      </div>

      <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="account">
              <User className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="sync">
              <RefreshCw className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="account" className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Dispositivos Conectados</h3>
            <div className="space-y-3">
              {devices.map((device) => (
                <div
                  key={device.id}
                  className={`p-3 rounded-lg flex items-center ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}
                >
                  <div className={`p-2 rounded-full mr-3 ${theme === "dark" ? "bg-zinc-700" : "bg-zinc-200"}`}>
                    {getDeviceIcon(device.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-medium">{device.name}</span>
                      {device.current && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Atual
                        </Badge>
                      )}
                    </div>
                    <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      {device.lastActive}
                    </p>
                  </div>
                  {!device.current && (
                    <Button variant="ghost" size="sm" className="text-xs">
                      Remover
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Armazenamento</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Uso de Armazenamento</span>
                  <span>2.4GB / 5GB</span>
                </div>
                <Progress value={48} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <div className="flex items-center mb-1">
                    <Database className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Histórico</span>
                  </div>
                  <p className="text-xs text-muted-foreground">1.2GB</p>
                </div>
                <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <div className="flex items-center mb-1">
                    <Download className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Downloads</span>
                  </div>
                  <p className="text-xs text-muted-foreground">0.8GB</p>
                </div>
                <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <div className="flex items-center mb-1">
                    <Cloud className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Backups</span>
                  </div>
                  <p className="text-xs text-muted-foreground">0.3GB</p>
                </div>
                <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <div className="flex items-center mb-1">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Cache</span>
                  </div>
                  <p className="text-xs text-muted-foreground">0.1GB</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Segurança da Conta</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Key className="h-4 w-4 mr-2" />
                  <div>
                    <p className="font-medium">Autenticação de dois fatores</p>
                    <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Proteja sua conta com 2FA
                    </p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  <div>
                    <p className="font-medium">Gerenciador de senhas</p>
                    <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Armazene suas senhas com segurança
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  <div>
                    <p className="font-medium">Alertas de segurança</p>
                    <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Receba alertas sobre atividades suspeitas
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Tokens de API</h3>
            <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">GitHub Integration</span>
                <Badge>Ativo</Badge>
              </div>
              <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} mb-2`}>
                Criado em 10/05/2023
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Revogar
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Renovar
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sync" className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Sincronização</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sincronizar favoritos</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Mantenha seus favoritos em todos os dispositivos
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sincronizar histórico</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Mantenha seu histórico de navegação
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sincronizar extensões</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Mantenha suas extensões e configurações
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sincronizar senhas</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Mantenha suas senhas salvas
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Backup</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Cloud className="h-4 w-4 mr-2" />
                Criar backup agora
              </Button>
              <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                <p className="font-medium mb-1">Último backup</p>
                <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>10/05/2023 às 14:30</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Preferências</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Iniciar automaticamente</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Iniciar o EVO Browser ao ligar o computador
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificações</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Receber notificações do navegador
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tema escuro</p>
                  <p className={`text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                    Usar tema escuro no navegador
                  </p>
                </div>
                <Switch defaultChecked={theme === "dark"} />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-4 mt-4">
        <Separator className={`my-4 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`} />
        <Button variant="outline" className="w-full" onClick={onLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Sair da Conta
        </Button>
      </div>
    </div>
  )
}
