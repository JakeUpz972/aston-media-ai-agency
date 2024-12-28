import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;