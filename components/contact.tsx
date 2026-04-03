"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { KleapForm } from "@/components/kleap-form";
import { Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "07 56 98 68 05",
    link: "tel:0756986805",
  },
  {
    icon: Mail,
    title: "Email",
    value: "thomyza@hotmail.fr",
    link: "mailto:contact@hostnest.fr",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f5f0eb]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Une question ? Un projet ? Contactez-nous directement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Form */}
          <Card className="p-8 shadow-lg border-0">
            <KleapForm
              formId="contact"
              title="Contactez HostNest"
              fields={[
                { name: "name", label: "Nom", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Téléphone", type: "tel" },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
              submitText="Nous contacter"
              successMessage="Merci ! Nous vous répondrons dans les plus brefs délais."
            />
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a5f] mb-1">{info.title}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-[#d4a574] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* WhatsApp Button */}
            <Card className="p-8 bg-[#1e3a5f] border-0 text-white">
              <h3 className="text-xl font-semibold mb-3">
                Besoin d&apos;une réponse rapide ?
              </h3>
              <p className="text-white/80 mb-5">
                Écrivez-nous sur WhatsApp pour une réponse instantanée.
              </p>
              <a 
                href="https://wa.me/33659031952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#20bd5a] transition-colors w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Écrire sur WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
