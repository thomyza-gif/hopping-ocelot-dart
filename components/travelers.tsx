"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Travelers() {
  const features = [
    "Arrivée autonome possible",
    "Logements entretenus avec soin",
    "Assistance rapide en cas de besoin",
    "Livret d'accueil numérique personnalisé",
  ];

  return (
    <section id="travelers" className="py-24 bg-white">
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
              Pour les voyageurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des logements soigneusement sélectionnés pour garantir un séjour simple, confortable et sans surprise.
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
              href="https://176132_1.holidayfuture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d4a574] text-white font-semibold rounded-lg hover:bg-[#c49564] transition-colors shadow-lg"
            >
              Voir nos appartements disponibles
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
