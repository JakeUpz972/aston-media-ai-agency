import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
              <label className="block text-white mb-2" htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="budget">Budget</label>
              <Select>
                <SelectTrigger className="w-full bg-gray-800 border-gold/20">
                  <SelectValue placeholder="Sélectionnez votre budget" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border border-gold/20">
                  <SelectItem value="less-1000">Moins de 1000€</SelectItem>
                  <SelectItem value="1000-2000">1000€ - 2000€</SelectItem>
                  <SelectItem value="2000-5000">2000€ - 5000€</SelectItem>
                  <SelectItem value="5000-10000">5000€ - 10000€</SelectItem>
                  <SelectItem value="more-10000">Plus de 10000€</SelectItem>
                </SelectContent>
              </Select>
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