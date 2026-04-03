"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-[var(--text-primary)]">
      <Container className="text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Prêt à optimiser vos revenus locatifs ?
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Que vous possédiez un appartement à Paris ou une villa au soleil, HostNest vous accompagne dans la gestion de vos locations courte durée et bail mobilité.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white rounded-full px-10 py-6 text-lg font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[var(--text-primary)] rounded-full px-10 py-6 text-lg font-semibold"
            onClick={() => document.getElementById('logements')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir nos logements
          </Button>
        </div>
      </Container>
    </section>
  );
}
