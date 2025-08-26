"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Recycle,
  Zap,
  TrendingUp,
  Users,
  Truck,
  Factory,
  BarChart3,
  Route,
  Leaf,
  DollarSign,
  Globe,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { HeroImageWebp } from "@/public/images";
import Image from "next/image";

export default function EnerGiroLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    rol: "",
    provincia: "",
    mensaje: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          nombre: "",
          email: "",
          rol: "",
          provincia: "",
          mensaje: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              EnerGiro
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { label: "Problema", id: "problema" },
                { label: "Solución", id: "solucion" },
                { label: "Cómo funciona", id: "como-funciona" },
                { label: "Impacto", id: "impacto" },
                { label: "ODS", id: "ods" },
                { label: "FAQ", id: "faq" },
                { label: "Equipo", id: "equipo" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-2">
                {[
                  { label: "Problema", id: "problema" },
                  { label: "Solución", id: "solucion" },
                  { label: "Cómo funciona", id: "como-funciona" },
                  { label: "Impacto", id: "impacto" },
                  { label: "ODS", id: "ods" },
                  { label: "FAQ", id: "faq" },
                  { label: "Equipo", id: "equipo" },
                  { label: "Contacto", id: "contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImageWebp}
            alt="Camión verde transportando residuos orgánicos por campos con aerogeneradores, representando la economía circular y energía renovable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            ¿Cuánto valen tus residuos?
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto drop-shadow-md">
            Conectamos productores con plantas de biogás y operadores logísticos
            para optimizar la gestión de residuos orgánicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
              asChild
            >
              <a
                href="/presentacion.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver presentación
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section id="solucion" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Conectamos Actores Clave
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Conectamos a los tres actores principales del sistema para crear una
            cadena de valor eficiente y sostenible.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Recycle className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Generadores de Residuos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Municipios, cooperativas y empresas que generan residuos
                  orgánicos y buscan alternativas sostenibles de gestión.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Operadores Logísticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empresas de transporte que optimizan rutas y reducen costos
                  operativos en la recolección y entrega de residuos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Factory className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Generadores de Biogás</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plantas de biogás y biodigestores que procesan residuos
                  orgánicos para generar energía renovable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            El Problema
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-destructive" />
                  Residuos en aumento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  18 millones de toneladas anuales de residuos orgánicos
                  generados, con 1,15 kg por habitante por día.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Factory className="text-destructive" />
                  Basurales a cielo abierto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Más de 5.000 basurales a cielo abierto representan un riesgo
                  ambiental y sanitario constante.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="text-destructive" />
                  Emisiones de metano
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Las emisiones de metano contribuyen significativamente al
                  cambio climático y problemas sanitarios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-destructive" />
                  Logística fragmentada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Altos costos operativos y logística desorganizada dificultan
                  la gestión eficiente de residuos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo funciona Section */}
      <section id="como-funciona" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo funciona
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "El generador carga su residuo",
                  icon: Recycle,
                },
                {
                  step: 2,
                  title: "Las plantas solicitan residuos",
                  icon: Factory,
                },
                {
                  step: 3,
                  title: "Se propone una ruta de recolección",
                  icon: Route,
                },
                {
                  step: 4,
                  title: "La planta recibe el residuo y genera energía",
                  icon: Zap,
                },
                {
                  step: 5,
                  title: "Se muestran resultados e impacto",
                  icon: BarChart3,
                },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <item.icon className="text-primary" size={32} />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block w-8 h-0.5 bg-border ml-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section id="impacto" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Impacto
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Económico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reducción de costos operativos y creación de nuevas
                  oportunidades de negocio en la cadena de valor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Ambiental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generación de energía renovable a partir de residuos y
                  reducción significativa de gases de efecto invernadero.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto text-primary mb-4" size={64} />
                <CardTitle>Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fortalecimiento de la colaboración entre actores y
                  construcción de una cadena de valor más sólida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section id="ods" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Objetivos de Desarrollo Sostenible
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              EnerGiro contribuye directamente a los ODS 7, 12 y 13 de las
              Naciones Unidas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-6xl font-bold text-primary">
                    7
                  </CardTitle>
                  <CardDescription>
                    Energía asequible y no contaminante
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-6xl font-bold text-primary">
                    12
                  </CardTitle>
                  <CardDescription>
                    Producción y consumo responsables
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-6xl font-bold text-primary">
                    13
                  </CardTitle>
                  <CardDescription>Acción por el clima</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="text-muted-foreground mt-8">
              Nuestros reportes y trazabilidad ayudan a certificar el
              cumplimiento de estos objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Qué datos necesito para empezar?
                </AccordionTrigger>
                <AccordionContent>
                  Para comenzar necesitas información básica sobre tus residuos
                  orgánicos: tipo de residuo, cantidad aproximada, frecuencia de
                  generación y ubicación. También es útil conocer tu capacidad
                  de almacenamiento temporal y preferencias logísticas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Cómo se integra con mi logística actual?
                </AccordionTrigger>
                <AccordionContent>
                  EnerGiro se diseñó para complementar tu operación existente.
                  Puedes mantener tus proveedores actuales mientras exploras
                  nuevas oportunidades, o gradualmente optimizar rutas según las
                  recomendaciones de la plataforma. La integración es flexible y
                  adaptable a tu ritmo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Cómo estiman el potencial energético?
                </AccordionTrigger>
                <AccordionContent>
                  Utilizamos algoritmos basados en la composición de residuos,
                  contenido de materia orgánica, humedad y otros factores
                  técnicos. Nuestras estimaciones se basan en datos científicos
                  y se refinan continuamente con información real de las plantas
                  de biogás conectadas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  ¿Cuándo estará el marketplace completo?
                </AccordionTrigger>
                <AccordionContent>
                  El marketplace básico ya está disponible en nuestro MVP. Las
                  funcionalidades avanzadas como optimización automática de
                  rutas, forecast inteligente y métricas de impacto completas
                  estarán disponibles progresivamente según nuestro roadmap, con
                  releases cada 2-3 meses.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section id="equipo" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestro Equipo
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Sofía Barreneche" },
              { name: "Julia Serafini" },
              { name: "Facundo Vergé" },
              { name: "Emilia Goicoechea" },
              { name: "Daniel Agustín Brosio" },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-primary" size={32} />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>Fundador</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Contacto
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Contanos tu caso y te enviamos la presentación
          </p>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rol"
                    className="block text-sm font-medium mb-2"
                  >
                    Rol *
                  </label>
                  <select
                    id="rol"
                    required
                    value={formData.rol}
                    onChange={(e) =>
                      setFormData({ ...formData, rol: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona tu rol</option>
                    <option value="Generador">Generador de residuos</option>
                    <option value="Logística">Operador logístico</option>
                    <option value="Planta">Generador de biogás</option>
                    <option value="Gobierno">Gobierno/Municipio</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="provincia"
                    className="block text-sm font-medium mb-2"
                  >
                    Provincia
                  </label>
                  <Input
                    id="provincia"
                    type="text"
                    value={formData.provincia}
                    onChange={(e) =>
                      setFormData({ ...formData, provincia: e.target.value })
                    }
                    placeholder="Tu provincia"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  placeholder="Contanos sobre tu caso específico..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Enviando..." : "Contactar"}
              </Button>

              {formStatus === "success" && (
                <p className="text-center text-green-600">
                  ¡Mensaje enviado! Te contactaremos pronto.
                </p>
              )}

              {formStatus === "error" && (
                <p className="text-center text-destructive">
                  Error al enviar. Intenta nuevamente.
                </p>
              )}
            </form>

            <Separator className="my-8" />

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                O escribinos directamente:
              </p>
              <Button variant="outline" asChild>
                <a
                  href="mailto:energiro2025@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={16} />
                  energiro2025@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                EnerGiro
              </div>
              <p className="text-muted-foreground">
                Transformamos residuos en energía y valor local.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
              <div className="space-y-2">
                {[
                  { label: "Problema", id: "problema" },
                  { label: "Solución", id: "solucion" },
                  { label: "Cómo funciona", id: "como-funciona" },
                  { label: "MVP", id: "mvp" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Información</h3>
              <div className="space-y-2">
                {[
                  { label: "Roadmap", id: "roadmap" },
                  { label: "Beneficios", id: "beneficios" },
                  { label: "FAQ", id: "faq" },
                  { label: "Equipo", id: "equipo" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <a
                  href="mailto:energiro2025@gmail.com"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  energiro2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-muted-foreground">
            <p>&copy; EnerGiro 2025. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
