"use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    price: 285,
    rating: 4.92,
    reviews: 127,
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/14302/images/1775221492963-cabin-property",
    type: "Entire cabin",
    guests: 6,
    beds: 3,
    baths: 2,
  },
  {
    id: 2,
    title: "Ocean View Apartment",
    location: "Miami Beach, Florida",
    price: 195,
    rating: 4.88,
    reviews: 89,
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/14302/images/1775221494321-beach-apartment",
    type: "Entire apartment",
    guests: 4,
    beds: 2,
    baths: 1,
  },
  {
    id: 3,
    title: "Countryside Cottage",
    location: "Tuscany, Italy",
    price: 340,
    rating: 4.95,
    reviews: 203,
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/14302/images/1775221495392-cottage-property",
    type: "Entire villa",
    guests: 8,
    beds: 4,
    baths: 3,
  },
];

export function PropertiesSection() {
  return (
    <section id="properties" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Popular Destinations
          </h2>
          <p 
            className="text-lg text-[var(--text-secondary)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Discover our most loved properties around the world
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className={`group cursor-pointer ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'h-full' : ''}`}>
                {/* Image */}
                <div className={`relative ${index === 0 ? 'h-80 md:h-full' : 'h-56'}`}>
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-[var(--text-primary)]" />
                  </button>
                  {index === 0 && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--brand)] text-white text-xs font-semibold rounded-full">
                      Guest Favorite
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 
                        className={`font-semibold text-[var(--text-primary)] ${index === 0 ? 'text-xl' : 'text-base'}`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {property.title}
                      </h3>
                      <p 
                        className="text-sm text-[var(--text-secondary)]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {property.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{property.rating}</span>
                      <span className="text-sm text-[var(--text-secondary)]">({property.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                    <span>{property.type}</span>
                    <span>•</span>
                    <span>{property.guests} guests</span>
                    <span>•</span>
                    <span>{property.beds} beds</span>
                    <span>•</span>
                    <span>{property.baths} baths</span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-[var(--text-primary)]">${property.price}</span>
                    <span className="text-sm text-[var(--text-secondary)]">/ night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-[var(--text-primary)] text-white font-semibold rounded-full hover:bg-black/90 transition-colors">
            Browse all properties
          </button>
        </div>
      </div>
    </section>
  );
}
