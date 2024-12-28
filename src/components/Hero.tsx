import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/20 via-black to-black" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
            Transformez votre vision en{" "}
            <span className="text-gold">réalité digitale</span>
          </h1>
          <div className="space-y-8 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              <span className="text-gold">Expertise</span> en création de{" "}
              <span className="text-gold font-bold">sites web professionnels</span> et{" "}
              <span className="text-gold font-bold">solutions digitales</span> pour le{" "}
              <span className="text-gold font-bold">secteur médical</span>
            </p>
            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-justify">
                Spécialistes en <span className="text-gold font-semibold">développement web</span> et{" "}
                <span className="text-gold font-semibold">solutions digitales innovantes</span> pour les professionnels de santé en Martinique et en Outre-mer.
              </p>
              <p className="text-justify">
                Notre équipe d'<span className="text-gold font-semibold">experts en technologies web et outils IA</span> vous accompagne dans votre{" "}
                <span className="text-gold font-semibold">transformation numérique</span> avec passion et savoir-faire.
              </p>
              <p className="text-justify">
                Engagés pour votre <span className="text-gold font-semibold">visibilité en ligne</span>, nous créons des{" "}
                <span className="text-gold font-semibold">solutions sur mesure</span> qui répondent parfaitement à vos besoins.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Nos services
              <ArrowRight size={20} />
            </ScrollLink>
            <Link
              to="/contact"
              className="border border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;