"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Github,
  Book,
  MessageSquare,
  Heart,
  ChevronRight,
  Code,
  Terminal,
  Layers,
  Users,
  Server,
  Zap,
  CheckCircle,
  Coffee,
  Globe,
  ArrowRight,
  FileCode,
  UserCircle,
  Database,
  Mail,
} from "lucide-react"

export default function SiteHome() {
  const [activeTab, setActiveTab] = useState("home")
  const [osTab, setOsTab] = useState("windows")

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/evo-logo.png" alt="EVO Browser" width={40} height={40} className="h-10 w-10" />
            <span className="font-bold text-xl">EVO Browser</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="link" onClick={() => setActiveTab("home")}>
              Início
            </Button>
            <Button variant="link" onClick={() => setActiveTab("download")}>
              Download
            </Button>
            <Button variant="link" onClick={() => setActiveTab("wiki")}>
              Wiki
            </Button>
            <Button variant="link" onClick={() => setActiveTab("forum")}>
              Fórum
            </Button>
            <Button variant="link" onClick={() => setActiveTab("support")}>
              Apoie
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button size="sm">
              <UserCircle className="h-4 w-4 mr-2" />
              EVO ID
            </Button>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="container mx-auto px-4 py-8">
        {/* Home Tab */}
        <TabsContent value="home" className="space-y-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 py-12">
            <div className="flex-1 space-y-6">
              <Badge className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                Versão 1.0 Beta
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                O navegador feito <span className="text-blue-600 dark:text-blue-400">por desenvolvedores</span>, para
                desenvolvedores
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                EVO Browser combina as melhores ferramentas de desenvolvimento com uma experiência de navegação moderna
                e eficiente. Aumente sua produtividade com DevPad integrado, gerenciamento de perfis e muito mais.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setActiveTab("download")}>
                  <Download className="h-5 w-5 mr-2" />
                  Baixar Agora
                </Button>
                <Button variant="outline" size="lg" onClick={() => setActiveTab("wiki")}>
                  Saiba Mais
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="EVO Browser Screenshot"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recursos Principais</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Projetado para maximizar sua produtividade e experiência de desenvolvimento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <FileCode className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>DevPad Integrado</CardTitle>
                  <CardDescription>Editor de código completo dentro do navegador</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Edite, teste e visualize seu código sem sair do navegador. Suporte para HTML, CSS, JavaScript e
                    muito mais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <UserCircle className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>EVO ID</CardTitle>
                  <CardDescription>Sistema avançado de gerenciamento de perfis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Crie perfis separados para desenvolvimento, trabalho e uso pessoal. Sincronize configurações entre
                    dispositivos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Terminal className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>Terminal Integrado</CardTitle>
                  <CardDescription>Terminal completo dentro do navegador</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Execute comandos, gerencie pacotes e controle seus projetos sem alternar entre aplicativos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>Monitor de Banco de Dados</CardTitle>
                  <CardDescription>Visualize e gerencie seus bancos de dados</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Conecte-se a bancos de dados SQL e NoSQL, execute consultas e visualize resultados diretamente no
                    navegador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Github className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>Integração com GitHub</CardTitle>
                  <CardDescription>Gerencie seus repositórios sem sair do navegador</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Clone, commit, push e gerencie pull requests diretamente da interface do EVO Browser.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>Cliente de Email</CardTitle>
                  <CardDescription>Email integrado para desenvolvedores</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Receba notificações de GitHub, erros de produção e mensagens importantes sem alternar aplicativos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O que os desenvolvedores estão dizendo</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Junte-se a milhares de desenvolvedores que já melhoraram seu fluxo de trabalho
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-zinc-600 dark:text-zinc-300 mb-4">
                    "O EVO Browser revolucionou meu fluxo de trabalho. Ter todas as ferramentas de desenvolvimento em um
                    só lugar aumentou minha produtividade em pelo menos 30%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Ana Silva</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Frontend Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-zinc-600 dark:text-zinc-300 mb-4">
                    "O sistema de perfis e sessões é incrível. Consigo manter meus projetos organizados e alternar
                    facilmente entre ambientes de desenvolvimento."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Carlos Mendes</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Full Stack Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-zinc-600 dark:text-zinc-300 mb-4">
                    "A integração com GitHub e o terminal embutido são game changers. Não preciso mais alternar entre
                    aplicativos durante meu fluxo de trabalho."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Mariana Costa</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">DevOps Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para evoluir seu desenvolvimento?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
              Junte-se a milhares de desenvolvedores que já estão usando o EVO Browser para aumentar sua produtividade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => setActiveTab("download")}>
                <Download className="h-5 w-5 mr-2" />
                Baixar Agora
              </Button>
              <Button variant="outline" size="lg" onClick={() => setActiveTab("support")}>
                <Heart className="h-5 w-5 mr-2" />
                Apoiar o Projeto
              </Button>
            </div>
          </section>
        </TabsContent>

        {/* Download Tab */}
        <TabsContent value="download" className="space-y-12">
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Baixe o EVO Browser</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Disponível para Windows, macOS e Linux. Escolha sua plataforma abaixo.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Tabs value={osTab} onValueChange={setOsTab} className="mb-8">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="windows">Windows</TabsTrigger>
                  <TabsTrigger value="macos">macOS</TabsTrigger>
                  <TabsTrigger value="linux">Linux</TabsTrigger>
                </TabsList>

                <TabsContent value="windows" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>EVO Browser para Windows</CardTitle>
                      <CardDescription>Compatível com Windows 10 e 11</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Instalador .exe (64-bit)</p>
                        </div>
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Portable .zip (64-bit)</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Requisitos mínimos: Windows 10 ou superior, 4GB RAM, 500MB de espaço livre
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="macos" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>EVO Browser para macOS</CardTitle>
                      <CardDescription>Compatível com macOS 11 Big Sur e superior</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Instalador .dmg (Universal)</p>
                        </div>
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Instalador .dmg (Intel)</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Instalador .dmg (Apple Silicon)</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Requisitos mínimos: macOS 11 Big Sur ou superior, 4GB RAM, 500MB de espaço livre
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="linux" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>EVO Browser para Linux</CardTitle>
                      <CardDescription>Disponível em vários formatos para distribuições Linux</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Pacote .deb (Ubuntu, Debian)</p>
                        </div>
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Pacote .rpm (Fedora, RHEL)</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">EVO Browser 1.0 Beta</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">AppImage (Universal)</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg bg-zinc-50 dark:bg-zinc-800">
                        <p className="font-medium mb-2">Instalação via Terminal</p>
                        <div className="bg-zinc-900 text-zinc-100 p-3 rounded-md font-mono text-sm overflow-x-auto">
                          curl -fsSL https://evo-browser.dev/install.sh | sh
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Requisitos mínimos: Kernel 5.4 ou superior, 4GB RAM, 500MB de espaço livre
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Notas da Versão - 1.0 Beta</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lançamento inicial do EVO Browser com todas as funcionalidades principais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>DevPad integrado com suporte para HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sistema EVO ID para gerenciamento de perfis e sincronização</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com GitHub, terminal e cliente de email</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Suporte para temas claro e escuro</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Esta é uma versão beta. Encontrou algum problema?{" "}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Reporte no GitHub
                  </a>{" "}
                  ou{" "}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    no Fórum
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Wiki Tab */}
        <TabsContent value="wiki" className="space-y-12">
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Wiki do EVO Browser</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Guias completos, tutoriais e documentação para aproveitar ao máximo o EVO Browser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <Card>
                    <CardHeader>
                      <CardTitle>Categorias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start">
                          <Book className="h-4 w-4 mr-2" />
                          Guia de Instalação
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Layers className="h-4 w-4 mr-2" />
                          Módulos e Componentes
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <FileCode className="h-4 w-4 mr-2" />
                          DevPad
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <UserCircle className="h-4 w-4 mr-2" />
                          Perfis e Sessões
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Github className="h-4 w-4 mr-2" />
                          Integrações
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Terminal className="h-4 w-4 mr-2" />
                          Terminal
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Database className="h-4 w-4 mr-2" />
                          Banco de Dados
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Zap className="h-4 w-4 mr-2" />
                          Dicas e Truques
                        </Button>
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Guia de Instalação</CardTitle>
                    <CardDescription>Como instalar o EVO Browser em diferentes sistemas operacionais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Windows</h3>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Baixe o instalador .exe da página de downloads</li>
                        <li>Execute o arquivo baixado</li>
                        <li>Siga as instruções do assistente de instalação</li>
                        <li>Após a conclusão, o EVO Browser será iniciado automaticamente</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">macOS</h3>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Baixe o arquivo .dmg da página de downloads</li>
                        <li>Abra o arquivo .dmg</li>
                        <li>Arraste o ícone do EVO Browser para a pasta Aplicativos</li>
                        <li>Abra o EVO Browser da pasta Aplicativos</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Linux</h3>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>
                          <strong>Usando o script de instalação:</strong>
                          <div className="bg-zinc-900 text-zinc-100 p-3 rounded-md font-mono text-sm mt-2 overflow-x-auto">
                            curl -fsSL https://evo-browser.dev/install.sh | sh
                          </div>
                        </li>
                        <li>
                          <strong>Debian/Ubuntu:</strong>
                          <div className="bg-zinc-900 text-zinc-100 p-3 rounded-md font-mono text-sm mt-2 overflow-x-auto">
                            sudo dpkg -i evo-browser_1.0.0_amd64.deb
                          </div>
                        </li>
                        <li>
                          <strong>Fedora/RHEL:</strong>
                          <div className="bg-zinc-900 text-zinc-100 p-3 rounded-md font-mono text-sm mt-2 overflow-x-auto">
                            sudo rpm -i evo-browser-1.0.0.x86_64.rpm
                          </div>
                        </li>
                        <li>
                          <strong>AppImage:</strong>
                          <div className="bg-zinc-900 text-zinc-100 p-3 rounded-md font-mono text-sm mt-2 overflow-x-auto">
                            chmod +x EVO-Browser-1.0.0.AppImage
                            <br />
                            ./EVO-Browser-1.0.0.AppImage
                          </div>
                        </li>
                      </ol>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Guia Completo de Instalação
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Como Usar o DevPad</CardTitle>
                    <CardDescription>Guia completo para o editor de código integrado</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-zinc-600 dark:text-zinc-300">
                      O DevPad é um editor de código completo integrado ao EVO Browser, permitindo que você edite, teste
                      e visualize seu código sem sair do navegador.
                    </p>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recursos Principais</h3>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Suporte para HTML, CSS, JavaScript, TypeScript e mais</li>
                        <li>Destaque de sintaxe e autocompletar inteligente</li>
                        <li>Visualização em tempo real das alterações</li>
                        <li>Terminal integrado para executar comandos</li>
                        <li>Integração com GitHub para clonar e enviar repositórios</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Como Acessar</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">Você pode acessar o DevPad de várias maneiras:</p>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300 mt-2">
                        <li>Clicando no ícone do DevPad na barra de ferramentas</li>
                        <li>Usando o atalho de teclado Ctrl+Shift+D (Cmd+Shift+D no macOS)</li>
                        <li>Através do menu lateral, na seção "Ferramentas de Desenvolvimento"</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Dica Rápida</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        Para criar um novo projeto rapidamente, use o comando{" "}
                        <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">Ctrl+N</code> dentro do DevPad e
                        selecione um dos templates disponíveis.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Documentação Completa do DevPad
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Perfis e Sessões</CardTitle>
                    <CardDescription>Como gerenciar perfis de usuário e sessões de navegação</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-zinc-600 dark:text-zinc-300">
                      O EVO Browser oferece um sistema avançado de gerenciamento de perfis e sessões, permitindo separar
                      completamente seus ambientes de trabalho, desenvolvimento e uso pessoal.
                    </p>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Perfis de Usuário (EVO ID)</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-2">
                        Cada perfil mantém suas próprias configurações, extensões, histórico e favoritos.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Crie perfis para diferentes contextos (Desenvolvimento, Trabalho, Pessoal)</li>
                        <li>Personalize cada perfil com ícones e nomes distintos</li>
                        <li>Configure sincronização específica para cada perfil</li>
                        <li>Use o modo anônimo/privado para navegação temporária</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Sessões de Navegação</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-2">
                        As sessões permitem isolar cookies, cache e armazenamento local entre diferentes sites ou
                        projetos.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Crie sessões nomeadas para diferentes projetos ou clientes</li>
                        <li>Mantenha múltiplos logins para o mesmo site em sessões diferentes</li>
                        <li>Isole completamente o armazenamento entre sessões</li>
                        <li>Exporte e importe sessões para compartilhar configurações</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Guia Completo de Perfis e Sessões
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Integrações com GitHub e Vercel</CardTitle>
                    <CardDescription>Como conectar e utilizar serviços de desenvolvimento</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-zinc-600 dark:text-zinc-300">
                      O EVO Browser oferece integrações nativas com GitHub, Vercel e outras plataformas de
                      desenvolvimento, permitindo um fluxo de trabalho contínuo.
                    </p>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Integração com GitHub</h3>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Clone repositórios diretamente para o DevPad</li>
                        <li>Visualize, crie e gerencie pull requests</li>
                        <li>Receba notificações de issues e comentários</li>
                        <li>Edite arquivos e faça commits sem sair do navegador</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Integração com Vercel</h3>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Faça deploy de projetos diretamente do DevPad</li>
                        <li>Monitore o status de seus deployments</li>
                        <li>Visualize logs e métricas de performance</li>
                        <li>Gerencie domínios e configurações de projeto</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Configuração</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-2">Para configurar as integrações:</p>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Acesse as Configurações do EVO Browser</li>
                        <li>Navegue até a seção "Integrações"</li>
                        <li>Selecione o serviço desejado e clique em "Conectar"</li>
                        <li>Siga as instruções de autenticação</li>
                      </ol>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Documentação Completa de Integrações
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Forum Tab */}
        <TabsContent value="forum" className="space-y-12">
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Fórum da Comunidade</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Conecte-se com outros usuários do EVO Browser, compartilhe ideias e obtenha ajuda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <Card>
                    <CardHeader>
                      <CardTitle>Categorias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Anúncios
                          <Badge className="ml-auto">3</Badge>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Code className="h-4 w-4 mr-2" />
                          Desenvolvimento
                          <Badge className="ml-auto">12</Badge>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Zap className="h-4 w-4 mr-2" />
                          Sugestões
                          <Badge className="ml-auto">8</Badge>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Users className="h-4 w-4 mr-2" />
                          Suporte
                          <Badge className="ml-auto">15</Badge>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Server className="h-4 w-4 mr-2" />
                          Extensões
                          <Badge className="ml-auto">6</Badge>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Globe className="h-4 w-4 mr-2" />
                          Geral
                          <Badge className="ml-auto">9</Badge>
                        </Button>
                      </nav>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Novo Tópico
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-3 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Tópicos Recentes</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Mais Recentes
                    </Button>
                    <Button variant="outline" size="sm">
                      Mais Populares
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="p-4 flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            >
                              Anúncio
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            >
                              Oficial
                            </Badge>
                          </div>
                          <h3 className="text-lg font-medium">
                            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                              Lançamento do EVO Browser 1.0 Beta
                            </a>
                          </h3>
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
                            Estamos animados em anunciar o lançamento da versão beta do EVO Browser! Confira as
                            novidades e compartilhe seu feedback.
                          </p>
                          <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                            <span>Por Admin</span>
                            <span className="mx-2">•</span>
                            <span>Hoje</span>
                            <span className="mx-2">•</span>
                            <span>32 comentários</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium">42</span>
                        </div>
                      </div>

                      <div className="p-4 flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                            >
                              Sugestão
                            </Badge>
                          </div>
                          <h3 className="text-lg font-medium">
                            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                              Sugestão: Adicionar suporte para extensões do Chrome
                            </a>
                          </h3>
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
                            Seria ótimo se o EVO Browser pudesse suportar extensões do Chrome para aumentar a
                            compatibilidade.
                          </p>
                          <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                            <span>Por DevUser</span>
                            <span className="mx-2">•</span>
                            <span>Ontem</span>
                            <span className="mx-2">•</span>
                            <span>18 comentários</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium">28</span>
                        </div>
                      </div>

                      <div className="p-4 flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                            >
                              Suporte
                            </Badge>
                          </div>
                          <h3 className="text-lg font-medium">
                            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                              Problema com sincronização de perfis entre dispositivos
                            </a>
                          </h3>
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
                            Estou tendo problemas para sincronizar meus perfis entre meu laptop e desktop. Alguém mais
                            está enfrentando isso?
                          </p>
                          <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                            <span>Por JohnDev</span>
                            <span className="mx-2">•</span>
                            <span>2 dias atrás</span>
                            <span className="mx-2">•</span>
                            <span>7 comentários</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium">15</span>
                        </div>
                      </div>

                      <div className="p-4 flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-orange-600 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
                            >
                              Geral
                            </Badge>
                          </div>
                          <h3 className="text-lg font-medium">
                            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                              Compartilhe suas configurações do DevPad
                            </a>
                          </h3>
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
                            Quais são suas configurações favoritas para o DevPad? Compartilhe seus temas, atalhos e
                            extensões!
                          </p>
                          <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                            <span>Por CodeMaster</span>
                            <span className="mx-2">•</span>
                            <span>3 dias atrás</span>
                            <span className="mx-2">•</span>
                            <span>24 comentários</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium">31</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center p-4">
                    <Button variant="outline">Ver Mais Tópicos</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas do Fórum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1,245</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">Usuários</p>
                      </div>
                      <div className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">328</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">Tópicos</p>
                      </div>
                      <div className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2,876</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">Respostas</p>
                      </div>
                      <div className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">87%</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">Resolvidos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Support Tab */}
        <TabsContent value="support" className="space-y-12">
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Apoie o EVO Browser</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                Ajude-nos a continuar desenvolvendo o melhor navegador para desenvolvedores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coffee className="h-6 w-6 text-amber-500 mr-2" />
                    Apoie Financeiramente
                  </CardTitle>
                  <CardDescription>Contribua para o desenvolvimento contínuo do EVO Browser</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Sua contribuição financeira ajuda a manter o EVO Browser gratuito e de código aberto, permitindo que
                    continuemos adicionando novos recursos e melhorias.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="flex flex-col h-auto py-4">
                      <span className="text-lg font-bold">R$10</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Mensal</span>
                    </Button>
                    <Button className="flex flex-col h-auto py-4 bg-blue-600 hover:bg-blue-700">
                      <span className="text-lg font-bold">R$25</span>
                      <span className="text-xs">Mensal</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col h-auto py-4">
                      <span className="text-lg font-bold">R$50</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Mensal</span>
                    </Button>
                  </div>

                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Valor Personalizado</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Outro valor" type="number" min="5" />
                      <Button>Doar</Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="justify-start">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Apoia.se"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Apoiar via Apoia.se
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="GitHub Sponsors"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      GitHub Sponsors
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 text-purple-500 mr-2" />
                    Contribua com Código
                  </CardTitle>
                  <CardDescription>Ajude a melhorar o EVO Browser com suas habilidades</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-600 dark:text-zinc-300">
                    O EVO Browser é um projeto de código aberto e valorizamos contribuições de desenvolvedores de todos
                    os níveis de experiência.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Como Contribuir</h3>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Faça fork do repositório no GitHub</li>
                        <li>Escolha uma issue para trabalhar ou crie uma nova</li>
                        <li>Implemente suas alterações</li>
                        <li>Envie um pull request</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Áreas para Contribuição</h3>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                        <li>Desenvolvimento de novos recursos</li>
                        <li>Correção de bugs</li>
                        <li>Melhorias de performance</li>
                        <li>Documentação</li>
                        <li>Traduções</li>
                        <li>Design e UX</li>
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Github className="h-4 w-4 mr-2" />
                    Ver Repositório no GitHub
                  </Button>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 text-red-500 mr-2" />
                    Apoiadores
                  </CardTitle>
                  <CardDescription>Agradecemos a todos que tornaram o EVO Browser possível</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="flex flex-col items-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                        <div className="w-16 h-16 bg-blue-600 rounded-full mb-2"></div>
                        <p className="font-medium">Apoiador {i + 1}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Nível Platina</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Todos os Apoiadores
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/evo-logo.png" alt="EVO Browser" width={32} height={32} className="h-8 w-8" />
                <span className="font-bold text-lg">EVO Browser</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                O navegador feito por desenvolvedores, para desenvolvedores.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Extensões
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Fórum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Tutoriais
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-700 mt-8 pt-8 text-center text-sm text-zinc-600 dark:text-zinc-300">
            <p>&copy; {new Date().getFullYear()} EVO Browser. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
