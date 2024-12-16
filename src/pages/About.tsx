import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-gold">
            À Propos d'ASTON MEDIA
          </h1>
          
          <div className="space-y-8">
            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Notre Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                ASTON MEDIA est née d'une vision simple : transformer la présence numérique des professionnels de santé libéraux. Nous comprenons les défis uniques auxquels font face les praticiens dans le monde digital d'aujourd'hui.
              </p>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Notre Expertise
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Spécialisés dans la création de sites web sur mesure et le développement de solutions SAAS, nous combinons expertise technique et compréhension approfondie du secteur médical pour offrir des solutions digitales innovantes et performantes.
              </p>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Notre Engagement
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Nous nous engageons à fournir des solutions technologiques de haute qualité, accompagnées d'un support client exceptionnel. Notre objectif est de permettre aux professionnels de santé de se concentrer sur l'essentiel : leurs patients.
              </p>
            </section>

            <section className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">
                Nos Valeurs
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gold-light">Innovation</h3>
                  <p className="text-gray-300">Toujours à la pointe de la technologie pour offrir les meilleures solutions</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gold-light">Excellence</h3>
                  <p className="text-gray-300">Un engagement sans compromis vers la qualité et la performance</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gold-light">Confiance</h3>
                  <p className="text-gray-300">Des relations durables basées sur la transparence et la fiabilité</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;