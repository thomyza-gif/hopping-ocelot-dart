"use client";

import { Container } from "@/components/container";

const stats = [
  { value: "50+", label: "Biens gérés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4.9", label: "Note moyenne" },
  { value: "24h", label: "Temps de réponse" },
];

export function Stats() {
  return (
    <section className="py-16 bg-white border-y border-[var(--surface)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p 
                className="text-4xl md:text-5xl font-bold text-[var(--brand)] mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-[var(--text-secondary)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
