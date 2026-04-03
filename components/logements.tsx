"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Bed, Bath, Star, ExternalLink } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Appartement Haussmannien",
    location: "Paris 8ème, Champs-Élysées",
    type: "Paris",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080",
    price: "À partir de 180€/nuit",
  },
  {
    id: 2,
    title: "Studio Moderne Marais",
    location: "Paris 4ème, Le Marais",
    type: "Paris",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2340",
    price: "À partir de 120€/nuit",
  },
  {
    id: 3,
    title: "Loft avec Vue Seine",
    location: "Paris 13ème, Bercy",
    type: "Paris",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.95,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2340",
    price: "À partir de 250€/nuit",
  },
  {
    id: 4,
    title: "Villa Contemporaine",
    location: "Côte d'Azur, Antibes",
    type: "Sud",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    price: "À partir de 450€/nuit",
  },
  {
    id: 5,
    title: "Chalet Familial",
    location: "Alpes, Megève",
    type: "Montagne",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    rating: 4.9,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2340",
    price: "À partir de 380€/nuit",
  },
  {
    id: 6,
    title: "T3 lumineux Saint-Germain",
    location: "Paris 6ème, Saint-Germain",
    type: "Paris",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.85,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2340",
    price: "À partir de 200€/nuit",
  },
];

export function Logements() {
  return (
    <section id="logements" className="py-24 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[var(--brand)] font-semibold uppercase tracking-wider text-sm">Nos Logements</span>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4 mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Des biens <span className="text-[var(--brand)]">d'exception</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            Découvrez notre sélection de biens soigneusement choisis à Paris, en Île-de-France, dans le sud et à la montagne.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg shadow-[var(--brand)]/30"
            onClick={() => window.open('VOTRE_LIEN_BOOKING', '_blank')}
          >
            Cliquez ici pour réserver
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Tous', 'Paris', 'Île-de-France', 'Sud', 'Montagne'].map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0 
                  ? 'bg-[var(--brand)] text-white' 
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--brand)] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[var(--text-primary)]">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{property.title}</h3>
                </div>
                
                <div className="flex items-center gap-1 text-[var(--text-secondary)] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center gap-4 text-[var(--text-secondary)] text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {property.guests} pers.
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {property.bedrooms} ch.
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.bathrooms} sdb
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[var(--surface)]">
                  <div>
                    <p className="text-[var(--brand)] font-bold text-lg">{property.price}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{property.reviews} avis</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white rounded-full"
                    onClick={() => window.open('VOTRE_LIEN_BOOKING', '_blank')}
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
