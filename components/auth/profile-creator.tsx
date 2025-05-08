"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, User, Briefcase, Lock, ArrowLeft } from "lucide-react"
import Image from "next/image"

interface ProfileCreatorProps {
  onSave: (profile: any) => void
  onBack: () => void
  theme: string
}

export default function ProfileCreator({ onSave, onBack, theme }: ProfileCreatorProps) {
  const [name, setName] = useState("")
  const [profileType, setProfileType] = useState("developer")
  const [avatar, setAvatar] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: Date.now().toString(),
      name,
      type: profileType,
      avatar,
    })
  }

  const getProfileIcon = (type: string) => {
    switch (type) {
      case "developer":
        return <Code className="h-5 w-5" />
      case "personal":
        return <User className="h-5 w-5" />
      case "work":
        return <Briefcase className="h-5 w-5" />
      case "private":
        return <Lock className="h-5 w-5" />
      default:
        return <User className="h-5 w-5" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className={`w-[450px] ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white"}`}>
        <CardHeader className="space-y-1">
          <Button variant="ghost" size="icon" className="absolute left-2 top-2" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex justify-center">
            <div className="w-16 h-16 mb-4">
              <Image src="/images/evo-logo.png" alt="EVO Browser" width={64} height={64} />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Criar Novo Perfil</CardTitle>
          <CardDescription className="text-center">Configure seu perfil de navegação</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  {avatar ? (
                    <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
                  ) : (
                    <AvatarFallback className="text-2xl">{getProfileIcon(profileType)}</AvatarFallback>
                  )}
                </Avatar>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Nome do Perfil</Label>
                <Input
                  id="name"
                  placeholder="Ex: Desenvolvimento, Trabalho, Pessoal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Tipo de Perfil</Label>
                <RadioGroup value={profileType} onValueChange={setProfileType} className="grid grid-cols-2 gap-4">
                  <div
                    className={`flex items-center space-x-2 rounded-md border p-3 ${profileType === "developer" ? "border-primary" : ""}`}
                  >
                    <RadioGroupItem value="developer" id="developer" className="sr-only" />
                    <Label htmlFor="developer" className="flex flex-1 items-center gap-2 cursor-pointer font-normal">
                      <Code className="h-5 w-5" />
                      <span>Desenvolvimento</span>
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 rounded-md border p-3 ${profileType === "personal" ? "border-primary" : ""}`}
                  >
                    <RadioGroupItem value="personal" id="personal" className="sr-only" />
                    <Label htmlFor="personal" className="flex flex-1 items-center gap-2 cursor-pointer font-normal">
                      <User className="h-5 w-5" />
                      <span>Pessoal</span>
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 rounded-md border p-3 ${profileType === "work" ? "border-primary" : ""}`}
                  >
                    <RadioGroupItem value="work" id="work" className="sr-only" />
                    <Label htmlFor="work" className="flex flex-1 items-center gap-2 cursor-pointer font-normal">
                      <Briefcase className="h-5 w-5" />
                      <span>Trabalho</span>
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 rounded-md border p-3 ${profileType === "private" ? "border-primary" : ""}`}
                  >
                    <RadioGroupItem value="private" id="private" className="sr-only" />
                    <Label htmlFor="private" className="flex flex-1 items-center gap-2 cursor-pointer font-normal">
                      <Lock className="h-5 w-5" />
                      <span>Privado</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Criar Perfil
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
