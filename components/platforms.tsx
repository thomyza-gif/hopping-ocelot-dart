"use client";

export function Platforms() {
  const platforms = [
    { name: "Airbnb", icon: "🏠" },
    { name: "Booking.com", icon: "🛏️" },
    { name: "Abritel", icon: "🏡" },
    { name: "Vrbo", icon: "🔑" },
    { name: " Expedia", icon: "✈️" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
          Présents sur toutes les plateformes
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2 text-gray-600"
            >
              <span className="text-2xl">{platform.icon}</span>
              <span className="font-medium text-lg">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
