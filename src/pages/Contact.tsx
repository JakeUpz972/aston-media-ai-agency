import Header from "../components/Header";
import HomeButton from "../components/HomeButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-montserrat font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-gray-400 mb-8">Pour toute question ou demande, n'hésitez pas à nous contacter.</p>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;