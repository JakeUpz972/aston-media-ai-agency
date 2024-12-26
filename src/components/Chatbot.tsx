import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Message } from '../types/chat';
import { findBestMatch } from '../utils/chatUtils';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis Noah, votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");

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
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gold text-gray-900 placeholder:text-gray-500"
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