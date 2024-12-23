import Header from "../components/Header";
import HomeButton from "../components/HomeButton";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/167cbcc9-e7b0-4aae-8f04-425aabfd4016.png" 
              alt="Illustration professionnelle Aston Media" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl font-montserrat font-bold text-gold mb-6">
              Notre Engagement : Simplifier et Optimiser Votre Pratique Libérale
            </h1>
            
            <p className="text-gray-300">
              <span className="text-gold font-semibold">Aston Media</span>, votre partenaire digital de confiance, est une agence spécialisée dans l'accompagnement des professionnels de santé en libéral, avec une expertise particulière sur le marché des <span className="text-gold font-semibold">Outre-mer</span>.
            </p>

            <p className="text-gray-300">
              Nous nous engageons à vous fournir des <span className="text-gold font-semibold">solutions sur-mesure et innovantes</span>, adaptées à vos besoins spécifiques, pour vous permettre de vous concentrer sur l'essentiel : vos patients.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-montserrat font-bold text-gold">Ce que nous proposons :</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <span className="text-gold font-semibold">Création de sites internet personnalisés :</span> Une vitrine digitale à votre image, optimisée pour renforcer votre visibilité en ligne et attirer de nouveaux patients.
                </li>
                <li>
                  <span className="text-gold font-semibold">Logiciel SaaS tout-en-un :</span> Une solution intuitive, accessible par abonnement, pour simplifier la gestion de votre activité (agenda, facturation, gestion des dossiers patients, et plus).
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-montserrat font-bold text-gold">Pourquoi choisir Aston Media ?</h2>
              <p className="text-gray-300">
                Notre mission est de vous aider à atteindre vos objectifs professionnels grâce à des <span className="text-gold font-semibold">outils modernes, performants et pensés pour votre quotidien</span>. Nous comprenons les défis uniques des professionnels de santé libéraux, en particulier en Outre-mer, et nous adaptons nos services pour y répondre avec précision et efficacité.
              </p>
            </div>

            <p className="text-gold font-semibold text-lg">
              Rejoignez-nous et transformez votre pratique grâce à des solutions digitales fiables et innovantes !
            </p>
          </div>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default About;