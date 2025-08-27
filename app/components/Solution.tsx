"use client"

import { motion } from "framer-motion"
import { RotateCcw, Truck, Building2, ArrowRight, Leaf } from "lucide-react"

export default function Solution() {
  const actors = [
    {
      title: "Generadores de Residuos",
      icon: RotateCcw,
      color: "primary",
      description:
        "Municipios, cooperativas y empresas que generan residuos orgánicos y buscan alternativas sostenibles de gestión.",
      benefits: ["Reduce costos", "Cumple normativas", "Impacto ambiental positivo"]
    },
    {
      title: "Operadores Logísticos",
      icon: Truck,
      color: "accent",
      description:
        "Empresas de transporte que optimizan rutas y reducen costos operativos en la recolección y entrega de residuos.",
      benefits: ["Optimiza rutas", "Nuevos ingresos", "Eficiencia operativa"]
    },
    {
      title: "Generadores de Biogás",
      icon: Building2,
      color: "secondary",
      description: "Plantas de biogás y biodigestores que procesan residuos orgánicos para generar energía renovable.",
      benefits: ["Materia prima constante", "Energía limpia", "Sostenibilidad"]
    },
  ]

  return (
    <section id="solucion" className="py-20 bg-gradient-to-br from-beige-50 to-mint-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Nuestra Solución</span>
            </div>
          </div>
          <h2 className="section-title text-gradient">Conectamos Actores Clave</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conectamos a los tres actores principales del ecosistema para crear una cadena de valor eficiente, sostenible y económicamente viable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection arrows for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-6 z-10">
            <ArrowRight className="h-8 w-8 text-primary/60" />
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/3 transform -translate-y-1/2 translate-x-6 z-10">
            <ArrowRight className="h-8 w-8 text-primary/60" />
          </div>

          {actors.map((actor, index) => (
            <motion.div
              key={actor.title}
              className="eco-card bg-card/90 backdrop-blur-sm border-2 hover:border-primary/30 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${actor.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-${actor.color}/10 group-hover:bg-${actor.color}/20 transition-colors duration-300`}>
                    <actor.icon className={`h-8 w-8 text-${actor.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-card-foreground">{actor.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed mb-6">{actor.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Beneficios:</h4>
                  {actor.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${actor.color}`} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
