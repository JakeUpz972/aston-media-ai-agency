import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeButton = () => {
  return (
    <Link to="/">
      <Button
        className="fixed bottom-20 right-4 rounded-full w-14 h-14 bg-gold hover:bg-gold/90 text-black shadow-lg"
        aria-label="Retour à l'accueil"
      >
        <Home className="w-6 h-6" />
      </Button>
    </Link>
  );
};

export default HomeButton;