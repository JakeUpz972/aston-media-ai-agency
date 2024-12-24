import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  isUser: boolean;
}

const FAQ_DATA = {
  "qui êtes-vous": "Je suis Noah, votre assistant virtuel spécialisé dans l'accompagnement des professionnels de santé en Outre-mer. Je représente une agence spécialisée dans l'automatisation et l'intégration d'intelligence artificielle pour les professionnels de santé en libéral. Notre expertise couvre la création de sites internet, le développement de solutions SaaS médicales, l'intégration d'IA, l'automatisation des processus, le développement sur mesure et le consulting.",
  "pourquoi choisir": "L'automatisation et l'IA permettent d'optimiser significativement votre pratique en :\n- Réduisant le temps consacré aux tâches administratives\n- Améliorant la gestion des rendez-vous et le suivi des patients\n- Sécurisant vos données médicales\n- Facilitant la communication avec vos patients\n- Augmentant votre productivité tout en maintenant la qualité des soins",
  "service de création": "Notre service inclut :\n- La conception d'un site web professionnel et responsive\n- L'intégration d'un système de prise de rendez-vous en ligne\n- La mise en place d'un espace patient sécurisé\n- L'optimisation pour le référencement local\n- L'hébergement sécurisé des données de santé\n- La maintenance et les mises à jour régulières",
  "solution saas": "Notre solution SaaS médicale est un logiciel accessible via internet qui permet de :\n- Gérer votre agenda et vos rendez-vous\n- Tenir vos dossiers patients de manière sécurisée\n- Gérer votre facturation et vos documents administratifs\n- Assurer le suivi des patients\n- Accéder à vos données depuis n'importe quel appareil",
  "intégration ia": "L'IA peut être intégrée pour :\n- Automatiser la classification et l'analyse des documents médicaux\n- Assister dans le tri et la priorisation des patients\n- Optimiser la gestion des stocks de matériel médical\n- Fournir des analyses prédictives\n- Améliorer la précision des diagnostics",
  "sécurité données": "Nous respectons rigoureusement :\n- La réglementation RGPD\n- Les normes de sécurité spécifiques aux données de santé\n- L'hébergement des données sur des serveurs agréés HDS\n- Le chiffrement des données\n- Les protocoles de sauvegarde sécurisés",
  "durée moyenne": "Les délais varient selon les services :\n- Création de site internet : 4-6 semaines\n- Intégration SaaS : 2-3 semaines\n- Automatisation des processus : 3-8 semaines selon la complexité\n- Solutions sur mesure : à définir selon le cahier des charges",
  "support technique": "Nous proposons :\n- Une assistance technique disponible pendant les heures ouvrées\n- Un support par email, téléphone et visioconférence\n- Des formations à l'utilisation de nos solutions\n- Une documentation détaillée\n- Des mises à jour régulières",
  "formations": "Oui, nous offrons :\n- Des sessions de formation initiale incluses\n- Des formations continues selon les besoins\n- Des tutoriels vidéo\n- Une documentation utilisateur complète\n- Un accompagnement personnalisé",
  "tarifs": "Nos tarifs sont adaptés aux besoins des professionnels de santé en libéral :\n- Formules d'abonnement mensuels ou annuels\n- Solutions personnalisables selon vos besoins\n- Devis gratuit sur demande\n- Possibilité de combiner plusieurs services",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis Noah, votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");
  const { toast } = useToast();

  const findBestMatch = (input: string) => {
    const userInput = input.toLowerCase();
    let bestMatch = "";
    let highestScore = 0;

    Object.keys(FAQ_DATA).forEach(key => {
      const score = [...key].filter(char => userInput.includes(char)).length / key.length;
      if (score > highestScore) {
        highestScore = score;
        bestMatch = key;
      }
    });

    return highestScore > 0.3 ? FAQ_DATA[bestMatch as keyof typeof FAQ_DATA] : 
      "Je ne comprends pas votre question. Pourriez-vous la reformuler ou choisir parmi les sujets suivants :\n- Qui êtes-vous\n- Services proposés\n- Sécurité des données\n- Tarifs\n- Support technique";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isUser: true };
    const botResponse = { text: findBestMatch(inputText), isUser: false };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gold hover:bg-gold-light text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
          <div className="flex justify-between items-center bg-gold p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/5b19a21a-3a3a-407a-b7c1-7855b9325932.png"
                alt="Noah - Assistant virtuel"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h3 className="text-white font-semibold">Noah</h3>
                <p className="text-white/80 text-sm">Assistant virtuel</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-start gap-2`}
              >
                {!message.isUser && (
                  <img 
                    src="/lovable-uploads/5b19a21a-3a3a-407a-b7c1-7855b9325932.png"
                    alt="Noah"
                    className="w-8 h-8 rounded-full object-cover mt-1"
                  />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-gold text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-white px-4 py-2 rounded-md transition-colors duration-200"
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;