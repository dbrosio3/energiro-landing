"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué datos necesito para empezar?",
      answer: "Información sobre residuos orgánicos, cantidad, frecuencia, ubicación, capacidad de almacenamiento",
    },
    {
      question: "¿Cómo se integra con mi logística actual?",
      answer: "Diseñado para complementar operación existente, integración flexible y gradual",
    },
    {
      question: "¿Cómo estiman el potencial energético?",
      answer: "Algoritmos basados en composición, materia orgánica, humedad, datos científicos",
    },
    {
      question: "¿Cuándo estará el marketplace completo?",
      answer: "MVP disponible, funcionalidades avanzadas cada 2-3 meses según roadmap",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-beige-50 to-mint-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Preguntas Frecuentes</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-card-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
