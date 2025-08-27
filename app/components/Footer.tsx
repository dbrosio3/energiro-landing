"use client"

import Link from "next/link"
import { Recycle, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-beige-100 to-primary/10 border-t border-primary/20">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Logo and description */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">EnerGiro</span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Transformando residuos en energía sostenible para un futuro más limpio y circular.
          </p>
        </div>

        {/* Navigation */}
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Problema", href: "#problema" },
            { name: "Solución", href: "#solucion" },
            { name: "Cómo funciona", href: "#como-funciona" },
            { name: "Impacto", href: "#impacto" },
            { name: "Equipo", href: "#equipo" },
            { name: "Contacto", href: "#contacto" },
          ].map((item) => (
            <div key={item.name} className="pb-6">
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            </div>
          ))}
        </nav>

        {/* Contact info */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>energiro2025@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Argentina</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm leading-5 text-muted-foreground">
            © 2025 EnerGiro. Transformando residuos, impulsando comunidades.
          </p>
          <p className="text-xs leading-5 text-muted-foreground mt-2">
            Todos los derechos reservados | Diseñado con 💚 para el planeta
          </p>
        </div>
      </div>
    </footer>
  )
}
