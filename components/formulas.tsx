"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Formulas() {
  const formulas = [
    {
      name: "Formule Digitale",
      description: "Gestion des réservations et communication",
      popular: false,
    },
    {
      name: "Formule Complète",
      description: "Gestion opérationnelle complète",
      popular: true,
    },
    {
      name: "Formule Premium",
      description: "Accompagnement total avec suivi personnalisé",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f5f0eb]">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Nos formules
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Des solutions adaptées à vos besoins
          </p>
        </motion.div>

        {/* Formulas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {formulas.map((formula, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl text-center transition-all ${
                formula.popular
                  ? "bg-[#1e3a5f] text-white shadow-xl scale-105"
                  : "bg-white shadow-md hover:shadow-lg"
              }`}
            >
              {formula.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a574] text-white text-sm font-semibold rounded-full">
                  Le plus populaire
                </div>
              )}
              <h3 className={`text-xl font-bold mb-3 ${
                formula.popular ? "text-white" : "text-[#1e3a5f]"
              }`}>
                {formula.name}
              </h3>
              <p className={`text-sm ${
                formula.popular ? "text-white/80" : "text-gray-600"
              }`}>
                {formula.description}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
