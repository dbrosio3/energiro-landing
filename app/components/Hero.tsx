"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Recycle, Leaf } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen flex items-center energy-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20">
          <Leaf className="h-24 w-24 text-primary rotate-12" />
        </div>
        <div className="absolute top-40 right-32">
          <Recycle className="h-20 w-20 text-mint-600 -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-32">
          <Zap className="h-28 w-28 text-lime-600 rotate-45" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Leaf className="h-32 w-32 text-teal-600 -rotate-45" />
        </div>
      </div>

      {/* Image overlay with better blend */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-75"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* <Spline scene="https://prod.spline.design/wvfvglcGhSCCAUGz/scene.splinecode" /> */}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center z-10 pointer-events-none">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <motion.h1
          className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Cuánto valen tus residuos?
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold text-gradient-green sm:text-3xl lg:text-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Transformamos desechos en energía limpia
        </motion.h2>

        <motion.p
          className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Conectamos productores con plantas de biogás y operadores logísticos
          para optimizar la gestión de residuos orgánicos y generar energías
          renovables.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection("#contacto")}
            className="apple-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg pointer-events-auto"
          >
            Contactar
          </button>
          <a
            href="#"
            className="secondary-button text-lg font-semibold leading-6 text-secondary-foreground transition-colors flex items-center gap-2 pointer-events-auto"
          >
            Ver presentación <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors pointer-events-auto"
            onClick={() => scrollToSection("#solucion")}
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
