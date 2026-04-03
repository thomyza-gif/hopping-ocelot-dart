"use client";

import { Container } from "./container";
import { Logo } from "@/components/logo";
import { Home, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <Container className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Votre conciergerie premium pour des séjours d'exception à Paris et en Île-de-France.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Accueil
                </Link>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  Nos services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Nos Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Locations courte durée</li>
              <li>Bail mobilité</li>
              <li>Paris & Île-de-France</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>contact@hostnest.fr</li>
              <li>Paris & Île-de-France</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 HostNest. Tous droits réservés.
            </p>
            <p className="text-white/50 text-sm">
              Conçu avec passion par HostNest Conciergerie
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
