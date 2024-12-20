import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FAQ_DATA = [
  {
    question: "Quels sont vos services principaux ?",
    answer: "Nous proposons la création de sites web sur mesure et une solution SAAS dédiée aux professionnels de santé libéraux.",
  },
  {
    question: "Comment fonctionne votre solution SAAS ?",
    answer: "Notre solution SAAS est un logiciel spécialisé accessible par abonnement, conçu spécifiquement pour les besoins des professionnels de santé libéraux.",
  },
  {
    question: "Quel est le délai de création d'un site web ?",
    answer: "Le délai varie selon la complexité du projet, généralement entre 4 et 8 semaines pour un site web complet.",
  },
  {
    question: "Proposez-vous un support technique ?",
    answer: "Oui, nous offrons un support technique complet pour tous nos services, disponible pendant les heures ouvrées.",
  },
];

const ChatbotFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    // Permet de revenir à la position précédente dans l'historique
    if (window.history.state?.chatOpen) {
      window.history.back();
    }
  };

  const handleOpen = () => {
    // Ajoute un nouvel état dans l'historique avant d'ouvrir le chat
    window.history.pushState({ chatOpen: true }, "");
    setIsOpen(true);
  };

  // Écoute les changements d'état de l'historique
  window.onpopstate = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-gold hover:bg-gold/90 text-black shadow-lg"
        aria-label="Ouvrir le FAQ bot"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-xl border-gold/20">
          <CardHeader className="bg-black text-white border-b border-gold/20">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-montserrat">FAQ Bot</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white hover:text-gold"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardDescription className="text-gray-400">
              Questions fréquemment posées
            </CardDescription>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto p-4">
            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer border border-gold/10 hover:border-gold/30"
                >
                  <h4 className="font-medium text-white mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatbotFAQ;