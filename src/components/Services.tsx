import { Globe, Database, Brain, Cog, Code, Search, Code2, HeadsetIcon, Briefcase } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-gold" />,
      title: "Création de Sites Web",
      description:
        "Des sites web sur mesure, élégants et performants pour votre présence digitale.",
      image: "photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Database className="w-12 h-12 text-gold" />,
      title: "Solution SAAS Médicale",
      description:
        "Logiciel spécialisé pour les professionnels de santé libéraux.",
      image: "photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Brain className="w-12 h-12 text-gold" />,
      title: "Intégration IA",
      description:
        "Solutions d'intelligence artificielle innovantes pour optimiser vos processus métier.",
      image: "photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Cog className="w-12 h-12 text-gold" />,
      title: "Automatisation des Processus",
      description:
        "Optimisez votre efficacité opérationnelle grâce à l'automatisation intelligente.",
      image: "photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Code className="w-12 h-12 text-gold" />,
      title: "Développement sur Mesure",
      description:
        "Solutions logicielles personnalisées répondant précisément à vos besoins.",
      image: "photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold" />,
      title: "Consulting",
      description:
        "Accompagnement stratégique pour votre transformation digitale et l'intégration des nouvelles technologies.",
      image: "photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const process = [
    {
      icon: <Search className="w-12 h-12 text-gold" />,
      title: "Analyse & Diagnostic",
      description:
        "Nous débutons par une analyse détaillée de vos flux de travail actuels pour déterminer comment l'IA peut améliorer vos processus et optimiser vos opérations.",
    },
    {
      icon: <Code2 className="w-12 h-12 text-gold" />,
      title: "Développement Sur Mesure",
      description:
        "Par la suite, nos développeurs créent des solutions IA adaptées spécifiquement à votre profession, en privilégiant systématiquement la qualité et la sécurité.",
    },
    {
      icon: <HeadsetIcon className="w-12 h-12 text-gold" />,
      title: "Support Continu",
      description:
        "Après l'installation, nous restons à vos côtés pour garantir un suivi continu, en assurant un support constant et en optimisant les solutions mises en place.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://images.unsplash.com/${service.image}`}
                    alt={service.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
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

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Notre <span className="text-gold">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une approche méthodique pour votre transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 p-8"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;