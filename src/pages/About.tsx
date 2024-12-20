import { motion } from "framer-motion";

const About = () => {
  return (
    <div 
      className="min-h-screen bg-black/80 text-white relative"
      style={{
        backgroundImage: "url('/lovable-uploads/7e00820f-4b5e-441c-af0f-96b5e5255965.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gold">
            Notre Engagement
          </h1>
          
          <div className="space-y-8">
            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Votre Partenaire Digital de Confiance
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                <span className="text-gold font-semibold">Aston Media</span>, votre partenaire digital de confiance, est une agence spécialisée dans l'<span className="text-gold font-semibold">accompagnement des professionnels de santé en libéral</span>, avec une expertise particulière sur le marché des <span className="text-gold font-semibold">Outre-mer</span>.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Nous nous engageons à vous fournir des <span className="text-gold font-semibold">solutions sur-mesure et innovantes</span>, adaptées à vos besoins spécifiques, pour vous permettre de vous concentrer sur l'essentiel : vos patients.
              </p>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Nos Solutions
              </h2>
              <ul className="space-y-4 text-lg leading-relaxed text-gray-300">
                <li>
                  <span className="text-gold font-semibold">Création de sites internet personnalisés :</span> Une vitrine digitale à votre image, optimisée pour renforcer votre visibilité en ligne et attirer de nouveaux patients.
                </li>
                <li>
                  <span className="text-gold font-semibold">Logiciel SaaS tout-en-un :</span> Une solution intuitive, accessible par abonnement, pour simplifier la gestion de votre activité (agenda, facturation, gestion des dossiers patients, et plus).
                </li>
              </ul>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Pourquoi Choisir Aston Media ?
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Notre <span className="text-gold font-semibold">mission</span> est de vous aider à atteindre vos objectifs professionnels grâce à des <span className="text-gold font-semibold">outils modernes et performants</span>, pensés pour votre quotidien. Nous comprenons les défis uniques des professionnels de santé libéraux, en particulier en Outre-mer, et nous adaptons nos services pour y répondre avec précision et efficacité.
              </p>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <p className="text-xl font-montserrat font-semibold text-center text-gold">
                Rejoignez-nous et transformez votre pratique grâce à des solutions digitales fiables et innovantes !
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;