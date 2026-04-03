"use client";

import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./heading";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Home, Heart, ArrowRight } from "lucide-react";

export function Properties() {
  return (
    <section className="py-24 bg-[#f5f0eb]">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4 text-[#1e3a5f]">
            Nos Services
          </Heading>
          <Subheading className="max-w-2xl mx-auto text-[#5a6a7a]">
            Des prestations pensées pour votre confort et votre sérénité, à chaque instant de votre séjour.
          </Subheading>
        </div>

        {/* Two Visual Blocks */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Block 1 */}
          <Card className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-16 h-16 rounded-2xl bg-[#1e3a5f]/10 flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-[#1e3a5f]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
              Appartements sélectionnés avec soin
            </h3>
            <p className="text-[#5a6a7a] leading-relaxed">
              Des logements élégants, confortables et idéalement situés pour profiter pleinement de Paris.
            </p>
          </Card>

          {/* Block 2 */}
          <Card className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
            <div className="w-16 h-16 rounded-2xl bg-[#d4a574]/20 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#d4a574]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
              Expérience sans compromis
            </h3>
            <p className="text-[#5a6a7a] leading-relaxed">
              Un accompagnement personnalisé et une attention portée à chaque détail pour un séjour parfait.
            </p>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#1e3a5f]/20"
            onClick={() => window.open('https://176132_1.holidayfuture.com', '_blank')}
          >
            Voir nos appartements disponibles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
