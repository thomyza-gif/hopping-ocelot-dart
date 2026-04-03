"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Building2, CheckCircle, ArrowRight } from "lucide-react";

export function BailMobilite() {
  return (
    <section id="bail-mobilite" className="py-24 md:py-32 bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Location meublée</span>
            </span>
            
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Bail Mobilité : la solution <span className="text-white/80">idéale</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Le bail mobilité est un contrat de location meublée conçu pour les besoins temporaires : mutations professionnelles, stages, missions, formations...
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Durée flexible</h4>
                  <p className="text-white/70 text-sm">Locations de 1 à 10 mois, sans tacite reconduction</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Locataires vérifiés</h4>
                  <p className="text-white/70 text-sm">Étudiants, stagiaires, CDD, mutations professionnelles</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Gestion simplifiée</h4>
                  <p className="text-white/70 text-sm">Nous gérons le bail, les états des lieux et la remise des clés</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-[var(--brand-dark)] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              En savoir plus
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Avantages pour les propriétaires</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Revenus locatifs garantis et réguliers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Fiscalité avantageuse (LMNP/LMP)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Vacances locatives maîtrisées</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Locataires responsables et encadrés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pas de préavis de 3 mois à gérer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Notre accompagnement</h3>
              <p className="text-white/80 mb-6">
                Nous vous accompagnons de A à Z : rédaction du bail, recherche de locataires qualifiés, gestion administrative et suivi du logement.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-white rounded-full" />
                </div>
                <span className="text-sm font-medium">Service complet inclus</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
