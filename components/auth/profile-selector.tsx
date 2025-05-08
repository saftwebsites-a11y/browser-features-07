"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Code, User, Briefcase, Lock, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

interface Profile {
  id: string
  name: string
  email?: string
  type: "developer" | "personal" | "work" | "private"
  avatar?: string
}

interface ProfileSelectorProps {
  onSelect: (profile: Profile) => void
  onCreateProfile: () => void
  onClose: () => void
  theme: string
}

export default function ProfileSelector({ onSelect, onCreateProfile, onClose, theme }: ProfileSelectorProps) {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: "1",
      name: "Desenvolvimento",
      email: "dev@example.com",
      type: "developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Pessoal",
      email: "personal@example.com",
      type: "personal",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Trabalho",
      email: "work@example.com",
      type: "work",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Privado",
      type: "private",
    },
  ])

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
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 mb-4">
            <Image src="/images/evo-logo.png" alt="EVO Browser" width={64} height={64} />
          </div>
          <CardTitle className="text-2xl">Selecione um Perfil</CardTitle>
          <CardDescription>Escolha um perfil para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-primary/10 ${theme === "dark" ? "border border-zinc-800" : "border"}`}
                onClick={() => onSelect(profile)}
              >
                <Avatar className="h-10 w-10 mr-4">
                  {profile.avatar ? (
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                  ) : (
                    <AvatarFallback>{getProfileIcon(profile.type)}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium">{profile.name}</h3>
                  {profile.email && <p className="text-sm text-muted-foreground">{profile.email}</p>}
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 p-3 h-auto"
              onClick={onCreateProfile}
            >
              <Plus className="h-5 w-5" />
              <span>Criar Novo Perfil</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              onClose()
            }}
          >
            Continuar sem perfil
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
