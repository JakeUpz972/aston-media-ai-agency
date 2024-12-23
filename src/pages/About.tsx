import Header from "../components/Header";
import HomeButton from "../components/HomeButton";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-montserrat font-bold text-white mb-6">À propos</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-400">
            Nous sommes une entreprise dédiée à la création de solutions digitales innovantes pour les professionnels de santé.
          </p>
          <p className="text-gray-400">
            Notre équipe est composée d'experts passionnés par la technologie et l'innovation, prêts à vous accompagner dans votre transformation digitale.
          </p>
          <p className="text-gray-400">
            Nous croyons en l'importance d'une présence en ligne efficace et nous nous engageons à fournir des services de haute qualité adaptés à vos besoins.
          </p>
          <p className="text-gray-400">
            Chez Aston Media, nous comprenons les défis uniques auxquels font face les professionnels de santé dans le monde numérique d'aujourd'hui. Notre mission est de simplifier leur transition digitale en fournissant des solutions sur mesure qui répondent à leurs besoins spécifiques.
          </p>
          <p className="text-gray-400">
            Nous nous distinguons par notre approche personnalisée et notre engagement envers l'excellence. Chaque projet est traité avec le plus grand soin, en mettant l'accent sur la sécurité, la convivialité et l'efficacité.
          </p>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default About;