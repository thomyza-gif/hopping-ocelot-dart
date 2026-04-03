import { Hero } from "@/components/hero";
import { Owners } from "@/components/owners";
import { Trust } from "@/components/trust";
import { Formulas } from "@/components/formulas";
import { Travelers } from "@/components/travelers";
import { Commitments } from "@/components/commitments";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Platforms } from "@/components/platforms";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Platforms />
      <Owners />
      <Trust />
      <Formulas />
      <Travelers />
      <Commitments />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
