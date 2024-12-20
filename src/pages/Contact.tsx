import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
            Contactez-nous
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
                <h2 className="text-2xl font-montserrat font-semibold mb-6 text-gold">
                  Nos Coordonnées
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="text-gold" />
                    <span>contact@astonmedia.fr</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="text-gold" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="text-gold" />
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-montserrat font-semibold mb-6 text-gold">
                Envoyez-nous un message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black/50 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;