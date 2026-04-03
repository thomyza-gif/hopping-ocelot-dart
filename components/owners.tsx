"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Owners() {
  const features = [
    "Gestion complète des réservations",
    "Communication voyageurs",
    "Check-in / Check-out",
    "Ménage professionnel",
    "Gestion du linge",
    "Maintenance du logement",
    "Assistance 7j/7",
  ];

  return (
    <section id="owners" className="py-24 bg-[#f5f0eb]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Vous êtes propriétaire ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confiez votre bien et maximisez vos revenus locatifs sans contraintes.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-12"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#d4a574] text-xl flex-shrink-0 mt-0.5">✔</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors shadow-lg"
            >
              Estimer mes revenus locatifs
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
