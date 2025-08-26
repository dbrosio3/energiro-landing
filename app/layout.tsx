import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
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
    <html lang="es" className={`${jost.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
