"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export default function Team() {
  const teamMembers = [
    { name: "Sofía Barreneche", role: "Fundador" },
    { name: "Julia Serafini", role: "Fundador" },
    { name: "Facundo Vergé", role: "Fundador" },
    { name: "Emilia Goicoechea", role: "Fundador" },
    { name: "Daniel Agustín Brosio", role: "Fundador" },
  ]

  return (
    <section id="equipo" className="py-20 bg-[#EDFCF1]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestro Equipo</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
