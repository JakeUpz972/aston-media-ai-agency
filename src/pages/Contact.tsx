import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBudgetChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      budget: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_20xjqte',
        'template_contact', // Vous devrez créer un template dans EmailJS et remplacer ceci par son ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        },
        'bZ74MnCVGmCRSa3qu'
      );

      if (result.text === 'OK') {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-montserrat font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-gray-400 mb-8">Pour toute question ou demande, n'hésitez pas à nous contacter.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="budget">Budget</label>
              <Select onValueChange={handleBudgetChange} value={formData.budget}>
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
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gold/20"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold hover:bg-gold/90 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;