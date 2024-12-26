export interface Message {
  text: string;
  isUser: boolean;
}

export interface ChatResponse {
  text: string;
  keywords: string[];
}

export const FAQ_RESPONSES: Record<string, ChatResponse> = {
  "qui": {
    text: "Je suis Noah, votre assistant virtuel spécialisé dans l'accompagnement des professionnels de santé en Outre-mer. Je représente une agence spécialisée dans l'automatisation et l'intégration d'intelligence artificielle pour les professionnels de santé en libéral. Notre expertise couvre la création de sites internet, le développement de solutions SaaS médicales, l'intégration d'IA, l'automatisation des processus, le développement sur mesure et le consulting.",
    keywords: ["qui", "êtes", "vous", "présentation", "agence", "noah"]
  },
  "services": {
    text: "Nos services incluent :\n- Création de sites web professionnels\n- Solutions SaaS médicales\n- Intégration d'IA\n- Automatisation des processus\n- Développement sur mesure\n- Consulting",
    keywords: ["services", "proposés", "offres", "prestations"]
  },
  "site": {
    text: "Notre service de création de site internet inclut :\n- La conception d'un site web professionnel et responsive\n- L'intégration d'un système de prise de rendez-vous en ligne\n- La mise en place d'un espace patient sécurisé\n- L'optimisation pour le référencement local\n- L'hébergement sécurisé des données de santé\n- La maintenance et les mises à jour régulières",
    keywords: ["site", "web", "internet", "création"]
  },
  "sécurité": {
    text: "Nous respectons rigoureusement :\n- La réglementation RGPD\n- Les normes de sécurité spécifiques aux données de santé\n- L'hébergement des données sur des serveurs agréés HDS\n- Le chiffrement des données\n- Les protocoles de sauvegarde sécurisés",
    keywords: ["sécurité", "données", "rgpd", "protection"]
  },
  "tarifs": {
    text: "Nos tarifs sont adaptés aux besoins des professionnels de santé en libéral :\n- Formules d'abonnement mensuels ou annuels\n- Solutions personnalisables selon vos besoins\n- Devis gratuit sur demande\n- Possibilité de combiner plusieurs services",
    keywords: ["tarifs", "prix", "coût", "budget", "devis"]
  },
  "support": {
    text: "Notre support technique comprend :\n- Une assistance technique disponible pendant les heures ouvrées\n- Un support par email, téléphone et visioconférence\n- Des formations à l'utilisation de nos solutions\n- Une documentation détaillée\n- Des mises à jour régulières",
    keywords: ["support", "technique", "aide", "assistance"]
  }
};