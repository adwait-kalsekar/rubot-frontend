'use client';

import { ChatInput, ChatHistory, Conversation } from '@/components';
import { Message } from '@/types/chat';
import { useEffect, useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const sampleMessages: Message[] = [
      { role: 'user', content: 'Hello!' },
      { role: 'assistant', content: 'Hi there! How can I assist you today?' },
    ];

    setMessages(sampleMessages);
  }, []);

  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="w-1/5 bg-gray-800 p-4 overflow-y-auto max-h-[100vh]">
        <ChatHistory />
      </div>
      {/* Conversation and Input */}
      <div className="w-4/5 flex flex-col">
        <Conversation messages={messages} />
        <ChatInput messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}
