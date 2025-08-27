"use client";

import { motion } from "framer-motion";
import { DollarSign, Sparkles, Users } from "lucide-react";

export default function Impact() {
  const impacts = [
    {
      title: "Económico",
      icon: DollarSign,
      description:
        "Reducción de costos operativos y creación de nuevas oportunidades de negocio en la cadena de valor.",
    },
    {
      title: "Ambiental",
      icon: Sparkles,
      description:
        "Generación de energía renovable a partir de residuos y reducción significativa de gases de efecto invernadero.",
    },
    {
      title: "Social",
      icon: Users,
      description:
        "Fortalecimiento de la colaboración entre actores y construcción de una cadena de valor más sólida.",
    },
  ];

  return (
    <section
      id="impacto"
      className="py-20 bg-no-repeat"
      style={{
        backgroundImage: "url('/rural-landscape-3.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Impacto</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <impact.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {impact.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
