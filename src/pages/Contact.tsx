import Header from "../components/Header";
import HomeButton from "../components/HomeButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-montserrat font-bold text-white mb-4">Contactez-nous</h1>
        <p className="text-gray-400 mb-4">Pour toute question ou demande, n'hésitez pas à nous contacter.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-white" htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
              required
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
              required
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;