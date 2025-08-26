import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "EnerGiro - Plataforma para valorizar residuos orgánicos",
  description:
    "Conectamos generadores, logística y plantas de biogás para convertir residuos en energía. Transformamos residuos orgánicos en valor local.",
  keywords: "residuos orgánicos, biogás, energía renovable, economía circular, sostenibilidad",
  openGraph: {
    title: "EnerGiro - Plataforma para valorizar residuos orgánicos",
    description: "Conectamos generadores, logística y plantas de biogás para convertir residuos en energía",
    type: "website",
    locale: "es_ES",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
