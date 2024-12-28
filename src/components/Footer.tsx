const Footer = () => {
  return (
    <footer className="py-8 mt-16 text-center text-white">
      <div className="space-y-2">
        <p className="font-montserrat font-semibold">ASTON MEDIA</p>
        <p>Les Trois-ilets 97229</p>
        <p>Martinique</p>
        <a 
          href="mailto:contact@astonmedia-agency.com"
          className="text-gold hover:text-gold-light transition-colors duration-300"
        >
          contact@astonmedia-agency.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;