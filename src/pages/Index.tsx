import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ChatbotFAQ from "../components/ChatbotFAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <ChatbotFAQ />
    </div>
  );
};

export default Index;