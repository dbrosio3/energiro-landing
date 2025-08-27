import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EnerGiro - Transformamos residuos en energía",
  description:
    "Conectamos productores con plantas de biogás y operadores logísticos para optimizar la gestión de residuos orgánicos.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-background text-foreground gradient-bg`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
