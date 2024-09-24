// src/components/Chat/ChatHistory.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChatHistory() {
  // Sample chat history data
  const chats = [
    { id: 1, title: 'Conversation 1' },
    { id: 2, title: 'Conversation 2' },
  ];

  // State to track the active chat ID
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  return (
    <div className="ml-10">
      <h2 className="text-xl mb-4">Chat History</h2>
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`mb-2 rounded ${
              chat.id === activeChatId ? 'bg-gray-900' : 'bg-transparent'
            }`}
          >
            <Link
              href="#"
              className="block px-2 py-1 text-gray-400 hover:bg-gray-900"
              onClick={() => setActiveChatId(chat.id)}
            >
              {chat.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
