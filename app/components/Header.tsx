"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Recycle } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const navigationItems = [
    { name: "Problema", href: "#problema" },
    { name: "Solución", href: "#solucion" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Impacto", href: "#impacto" },
    { name: "FAQ", href: "#faq" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">EnerGiro</span>
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">EnerGiro</span>
          </Link>
        </div>

        <div className="hidden lg:flex gap-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="#contacto"
            className="hidden lg:block apple-button bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("#contacto")}
          >
            Contactanos
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-background/95 backdrop-blur-md border-t border-primary/20"
        >
          <div className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contacto")}
              className="block w-full py-2 mt-4 apple-button bg-primary hover:bg-primary/90 text-primary-foreground text-center"
            >
              Contactanos
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
