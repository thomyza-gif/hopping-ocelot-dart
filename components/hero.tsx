"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Paris Aerial */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073')`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/90" />
      
      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              HOSTNEST
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-4"
          >
            Conciergerie premium à Paris & Île-de-France
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-6 max-w-2xl mx-auto"
          >
            Rentabilisez votre bien sans contraintes, ou séjournez dans des appartements soigneusement sélectionnés.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-white/70 mb-10 max-w-2xl mx-auto"
          >
            HostNest accompagne les propriétaires dans l&apos;optimisation de leurs revenus locatifs et propose aux voyageurs une expérience fluide, premium et sans surprise.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#owners"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d4a574] text-white font-semibold rounded-lg hover:bg-[#c49564] transition-colors shadow-lg"
            >
              Je suis propriétaire
            </a>
            <a
              href="https://176132_1.holidayfuture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Réserver un séjour
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
