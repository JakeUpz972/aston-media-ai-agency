import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/20 via-black to-black" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
            Transformez votre vision en{" "}
            <span className="text-gold">réalité digitale</span>
          </h1>
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl text-gray-300">
              Expertise en création de sites web et solutions SAAS pour les professionnels de santé
            </p>
            <div className="space-y-4 text-gray-300">
              <p>
                Nous sommes une entreprise dédiée à la création de solutions digitales innovantes pour les professionnels de santé.
              </p>
              <p>
                Notre équipe est composée d'experts passionnés par la technologie et l'innovation, prêts à vous accompagner dans votre transformation digitale.
              </p>
              <p>
                Nous croyons en l'importance d'une présence en ligne efficace et nous nous engageons à fournir des services de haute qualité adaptés à vos besoins.
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