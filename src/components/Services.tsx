import { Globe, Database } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-gold" />,
      title: "Création de Sites Web",
      description:
        "Des sites web sur mesure, élégants et performants pour votre présence digitale.",
      image: "photo-1581091226825-a6a2a5aee158",
    },
    {
      icon: <Database className="w-12 h-12 text-gold" />,
      title: "Solution SAAS Médicale",
      description:
        "Logiciel spécialisé pour les professionnels de santé libéraux.",
      image: "photo-1581092795360-fd1ca04f0952",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Nos <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des solutions digitales innovantes pour votre succès
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://source.unsplash.com/${service.image}`}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;