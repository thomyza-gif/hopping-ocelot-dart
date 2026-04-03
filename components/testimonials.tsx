"use client";

import { Container } from "@/components/container";
import { Star } from "lucide-react";

const travelerReviews = [
  {
    name: "Marie L.",
    location: "Paris 4ème",
    rating: 5,
    text: "Séjour absolument parfait ! L'appartement était encore mieux que sur les photos. Propreté impeccable et accueil très chaleureux. Je recommande vivement !",
  },
  {
    name: "Thomas B.",
    location: "Saint-Germain-en-Laye",
    rating: 5,
    text: "Une expérience exceptionnelle. L'équipe a été très réactive et l'appartement correspondait parfaitement à nos attentes. Le check-in flexible a été très apprécié.",
  },
  {
    name: "Sophie M.",
    location: "Paris 11ème",
    rating: 5,
    text: "Troisième séjour avec HostNest et toujours aussi satisfaite. Le service de conciergerie fait toute la différence. On se sent vraiment comme à la maison.",
  },
];

function ReviewCard({ review }: { review: typeof travelerReviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-[#1e3a5f]">{review.name}</p>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-[#f5f0eb]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de ceux qui ont séjourné dans nos appartements
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {travelerReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
