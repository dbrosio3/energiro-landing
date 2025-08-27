"use client"

import { motion } from "framer-motion"
import { TrendingUp, Building2, Globe, DollarSign, AlertTriangle } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      title: "Residuos en aumento",
      icon: TrendingUp,
      color: "muted",
      stat: "18M ton/año",
      description:
        "18 millones de toneladas anuales de residuos orgánicos generados, con 1,15 kg por habitante por día.",
    },
    {
      title: "Basurales a cielo abierto",
      icon: Building2,
      color: "muted",
      stat: "+5.000",
      description: "Más de 5.000 basurales a cielo abierto representan un riesgo ambiental y sanitario constante.",
    },
    {
      title: "Emisiones de metano",
      icon: Globe,
      color: "muted",
      stat: "28x CO₂",
      description: "Las emisiones de metano contribuyen significativamente al cambio climático y problemas sanitarios.",
    },
    {
      title: "Logística fragmentada",
      icon: DollarSign,
      color: "muted",
      stat: "Altos costos",
      description: "Altos costos operativos y logística desorganizada dificultan la gestión eficiente de residuos.",
    },
  ]

  return (
    <section id="problema" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 border border-muted/30">
              <AlertTriangle className="h-5 w-5 text-muted" />
              <span className="text-sm font-medium text-muted">Situación Actual</span>
            </div>
          </div>
          <h2 className="section-title">¿Cuál es el verdadero costo de los residuos?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El mundo enfrenta una crisis en la gestión de residuos orgánicos que requiere soluciones urgentes e innovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="eco-card bg-card/90 backdrop-blur-sm border-2 border-muted/20 hover:border-muted/40 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-muted/10 group-hover:bg-muted/20 transition-colors duration-300">
                      <problem.icon className="h-6 w-6 text-muted" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-card-foreground">{problem.title}</h3>
                      <span className="text-sm font-bold text-muted bg-muted/10 px-2 py-1 rounded-full">
                        {problem.stat}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="eco-card bg-muted/5 border border-muted/30 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-muted mb-4">¿Cuál es el costo de no actuar?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-muted">🌍</div>
                <div className="text-sm text-muted-foreground">Degradación ambiental</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-muted">💰</div>
                <div className="text-sm text-muted-foreground">Pérdidas económicas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-muted">🏥</div>
                <div className="text-sm text-muted-foreground">Problemas de salud pública</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
