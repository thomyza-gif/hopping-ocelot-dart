"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Commitments() {
  const commitments = [
    "Réactivité",
    "Qualité constante",
    "Transparence",
    "Présence locale",
    "Accompagnement personnalisé",
  ];

  return (
    <section className="py-20 bg-[#1e3a5f]">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nos engagements
          </h2>
        </motion.div>

        {/* Commitments Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-3xl mx-auto"
        >
          {commitments.map((commitment, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[#d4a574] text-xl">✔</span>
              <span className="text-white text-lg">{commitment}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
