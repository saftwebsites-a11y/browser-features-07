import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EVO Browser - O navegador para desenvolvedores",
  description:
    "O navegador feito por desenvolvedores, para desenvolvedores. Com DevPad integrado, gerenciamento de perfis e muito mais.",
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
