import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Accueil", path: "/", type: "link" },
    { label: "Services", path: "services", type: "scroll" },
    { label: "À propos", path: "/about", type: "link" },
    { label: "Contact", path: "/contact", type: "link" },
  ];

  const renderNavItem = (item: typeof menuItems[0]) => {
    if (item.type === "scroll") {
      return (
        <ScrollLink
          key={item.label}
          to={item.path}
          smooth={true}
          duration={500}
          className="text-white hover:text-gold transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.path}
        className="text-white hover:text-gold transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/0a0634ac-81bb-4988-831f-17057df2b95e.png"
              alt="Aston Media"
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(renderNavItem)}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            {menuItems.map(renderNavItem)}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;