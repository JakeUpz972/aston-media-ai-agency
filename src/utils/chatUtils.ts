import { ChatResponse, FAQ_RESPONSES } from '../types/chat';

export const findBestMatch = (input: string): string => {
  const userInput = input.toLowerCase();
  let bestMatch: ChatResponse | null = null;
  let highestScore = 0;

  // Parcourir toutes les réponses possibles
  for (const response of Object.values(FAQ_RESPONSES)) {
    const score = calculateMatchScore(userInput, response.keywords);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = response;
    }
  }

  // Si aucune correspondance n'est trouvée ou si le score est trop bas
  if (!bestMatch || highestScore < 0.2) {
    return "Je ne comprends pas votre question. Pourriez-vous la reformuler ou choisir parmi les sujets suivants :\n- Qui êtes-vous\n- Services proposés\n- Sécurité des données\n- Tarifs\n- Support technique";
  }

  return bestMatch.text;
};

const calculateMatchScore = (input: string, keywords: string[]): number => {
  let score = 0;
  for (const keyword of keywords) {
    if (input.includes(keyword.toLowerCase())) {
      score += keyword.length / input.length;
    }
  }
  return score;
};