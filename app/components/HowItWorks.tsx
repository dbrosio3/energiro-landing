"use client";

import { motion } from "framer-motion";
import {
  RotateCcw,
  Building2,
  Map,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "El generador carga su residuo",
      description:
        "Los generadores de residuos orgánicos registran y cargan información sobre sus desechos disponibles",
      icon: RotateCcw,
    },
    {
      number: 2,
      title: "Las plantas solicitan residuos",
      description:
        "Las plantas de biogás buscan y solicitan los residuos que necesitan para su operación",
      icon: Building2,
    },
    {
      number: 3,
      title: "Se propone una ruta de recolección",
      description:
        "Nuestro algoritmo optimiza rutas eficientes de recolección para minimizar costos y emisiones",
      icon: Map,
    },
    {
      number: 4,
      title: "La planta recibe el residuo y genera energía",
      description:
        "Los residuos se procesan en las plantas para generar energía limpia y renovable",
      icon: Zap,
    },
    {
      number: 5,
      title: "Se muestran resultados e impacto",
      description:
        "Seguimiento completo del impacto ambiental y los beneficios generados",
      icon: BarChart3,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#0A1F16]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Zap className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-[#ffffff]">
                Proceso
              </span>
            </div>
          </div>
          <h2 className="section-title text-gradient">Cómo funciona</h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-secondary/5 rounded-lg p-12"
              // className="flex items-center gap-8 bg-[#1fb473] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm border-2 border-[#364652] hover:border-secondary/40 relative overflow-hidden group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 flex items-center gap-8 w-full">
                {/* <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full text-2xl font-bold shadow-lg">
                  {step.number}
                </div> */}
                <step.icon className="h-8 w-8 text-secondary flex-shrink-0" />
                <h3 className="text-xl font-semibold text-secondary-foreground">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
