"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail, Lock, User, ChromeIcon as Google } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface LoginFormProps {
  onLogin: (userData: any) => void
  onClose: () => void
  theme: string
}

export default function LoginForm({ onLogin, onClose, theme }: LoginFormProps) {
  const [authTab, setAuthTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would authenticate with a server
    onLogin({
      email,
      name: email.split("@")[0],
      profileType: "developer",
    })
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would register with a server
    onLogin({
      email,
      name,
      profileType: "developer",
    })
  }

  const handleSocialLogin = (provider: string) => {
    // In a real implementation, this would redirect to OAuth provider
    console.log(`Logging in with ${provider}`)
    onLogin({
      email: `user@${provider.toLowerCase()}.com`,
      name: `${provider} User`,
      profileType: "developer",
      provider,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className={`w-[400px] ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white"}`}>
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 mb-4">
            <Image src="/images/evo-logo.png" alt="EVO Browser" width={64} height={64} />
          </div>
          <CardTitle className="text-2xl">EVO ID</CardTitle>
          <CardDescription>Gerencie seus perfis e sincronize seus dados</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" value={authTab} onValueChange={setAuthTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        placeholder="nome@exemplo.com"
                        type="email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <a href="#" className="text-sm text-primary underline-offset-4 hover:underline">
                        Esqueceu a senha?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(!!checked)}
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Lembrar de mim
                    </label>
                  </div>
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignup}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-signup">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email-signup"
                        placeholder="nome@exemplo.com"
                        type="email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-signup">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password-signup"
                        type="password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Criar Conta
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className={`w-full border-t ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className={`px-2 ${theme === "dark" ? "bg-zinc-900" : "bg-white"} text-muted-foreground`}>
                Ou continue com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => handleSocialLogin("GitHub")} type="button">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" onClick={() => handleSocialLogin("Google")} type="button">
              <Google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-xs text-center text-muted-foreground">
            Ao continuar, você concorda com os{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Política de Privacidade
            </a>
            .
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              onClose()
            }}
          >
            Continuar sem login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
