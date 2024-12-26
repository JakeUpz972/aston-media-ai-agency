import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
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
  );
};

export default ChatMessage;