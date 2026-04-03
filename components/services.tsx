"use client";

import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./heading";
import { Card } from "./ui/card";
import { Calendar, Briefcase, Home, Shield, Key, Star } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Location Courte Durée",
    description: "Parfait pour vos vacances ou courts séjours. Dates d'arrivée et de départ flexibles selon vos besoins.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Briefcase,
    title: "Bail Mobilité",
    description: "Idéal pour les professionnels. Contrat de location de 1 à 10 mois, sans dépôt de garantie.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Home,
    title: "Logements Soigneusement Sélectionnés",
    description: "Chaque bien est vérifié pour garantir confort, propreté et équipements de qualité.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Shield,
    title: "Accompagnement Complet",
    description: "De la réservation au départ, nous sommes à vos côtés à chaque étape de votre séjour.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Key,
    title: "Arrivée Autonome",
    description: "Accès flexible 24h/24 avec boîte à clés ou serrure connectée. Vous arrivez à l'heure qui vous convient.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Star,
    title: "Service Premium",
    description: "Linge de maison fourni, ménage inclus, et assistance réactive. Votre confort est notre priorité.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/30">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Nos Services
          </Heading>
          <Subheading className="max-w-2xl mx-auto">
            Que vous soyez en déplacement professionnel ou en vacances, HostNest vous propose des solutions d'hébergement adaptées à vos besoins.
          </Subheading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
