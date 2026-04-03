"use client";

import { Container } from "./container";
import { Heading } from "./heading";
import { Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-[#f5f0eb]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <span className="text-[#a8c5d9] font-semibold text-sm uppercase tracking-wider">
            Bienvenue chez HostNest
          </span>
          <Heading level={2} className="mt-3 mb-12 text-[#1e3a5f]">
            Votre conciergerie dédiée à des séjours réussis à Paris et en Île-de-France
          </Heading>

          {/* Main Content */}
          <div className="space-y-6 text-lg text-[#5a6a7a] leading-relaxed mb-12">
            <p>
              Nous sélectionnons avec soin des appartements alliant confort, élégance et authenticité pour vous offrir une véritable expérience parisienne. Chaque logement est pensé pour que vous vous sentiez immédiatement chez vous, avec une attention particulière portée aux détails et à votre bien-être.
            </p>
            
            <p>
              Que vous voyagiez pour quelques jours ou plusieurs semaines, notre équipe vous accompagne pour rendre votre séjour simple, agréable et inoubliable.
            </p>
          </div>

          {/* Final Message */}
          <div className="inline-flex items-center gap-3 bg-[#f5f0eb] rounded-full px-8 py-4">
            <Heart className="w-5 h-5 text-[#a8c5d9]" />
            <p className="text-[#1e3a5f] font-medium text-lg">
              Bienvenue à Paris. Bienvenue chez HostNest.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="w-24 h-1 bg-[#a8c5d9]/30 rounded-full" />
          <div className="w-24 h-1 bg-[#1e3a5f]/20 rounded-full" />
          <div className="w-24 h-1 bg-[#a8c5d9]/30 rounded-full" />
        </div>
      </Container>
    </section>
  );
}
