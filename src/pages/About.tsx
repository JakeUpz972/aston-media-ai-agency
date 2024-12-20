import Header from "../components/Header";
import HomeButton from "../components/HomeButton";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-montserrat font-bold text-white mb-6">À propos</h1>
        <p className="text-gray-400 mb-4">
          Nous sommes une entreprise dédiée à la création de solutions digitales innovantes pour les professionnels de santé.
        </p>
        <p className="text-gray-400 mb-4">
          Notre équipe est composée d'experts passionnés par la technologie et l'innovation, prêts à vous accompagner dans votre transformation digitale.
        </p>
        <p className="text-gray-400 mb-4">
          Nous croyons en l'importance d'une présence en ligne efficace et nous nous engageons à fournir des services de haute qualité adaptés à vos besoins.
        </p>
      </div>
      <HomeButton />
    </div>
  );
};

export default About;
