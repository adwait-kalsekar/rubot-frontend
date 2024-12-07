'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { Conversation } from '@/types/chat';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

const CONVERSATIONS_URL = '/api/chat/conversations';

interface ChatHistoryProps {
  activeConversationId: string | 'new';
  setActiveConversationId: Dispatch<SetStateAction<string | 'new'>>;
}

export default function ChatHistory({
  activeConversationId,
  setActiveConversationId,
}: ChatHistoryProps) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const conversationQuery = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const response = await axios.get(CONVERSATIONS_URL);
      return response.data;
    },
  });

  const conversations: Conversation[] = conversationQuery.data;

  const handleLinkClick = (id: string | 'new') => {
    setActiveConversationId(id);
    setShowSidebar(false);
    if (id !== 'new') router.replace(`chat/${id}`);
  };

  return (
    <>
      {/* Hamburger button (visible only when sidebar is hidden) */}
      {!showSidebar && (
        <button
          className="md:hidden absolute top-24 left-4 text-gray-300 z-50"
          onClick={() => setShowSidebar(true)}
        >
          <MenuIcon fontSize="large" />
        </button>
      )}

      {/* Original sidebar visible on md and larger screens */}
      <div className="hidden md:block">
        <ul>
          <li
            className={`mb-2 rounded-lg ${
              activeConversationId === 'new'
                ? 'bg-gray-700'
                : 'bg-transparent hover:bg-gray-600 hover:rounded-lg'
            } `}
          >
            <Link
              href={`/chat/new`}
              className="block px-2 py-1 text-gray-300"
              onClick={() => handleLinkClick('new')}
            >
              <AddIcon style={{ fontSize: 'large' }} className="mr-2 mb-1" />
              <span className="text-lg">New Chat</span>
            </Link>
          </li>
          {conversations?.map((conversation) => (
            <li
              key={conversation.id}
              className={`mb-2 rounded-lg ${
                conversation.id === activeConversationId
                  ? 'bg-gray-700'
                  : 'bg-transparent hover:bg-gray-600 hover:rounded-lg'
              } `}
            >
              <Link
                href={`/chat/${conversation.id}`}
                className="block px-2 py-1 text-gray-300"
                onClick={() => handleLinkClick(conversation.id)}
              >
                <span className="text-lg">
                  {conversation.title.length > 20
                    ? `${conversation.title.slice(0, 20)}...`
                    : conversation.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 bg-gray-900 p-4 md:hidden z-40 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <button
              className="text-gray-300"
              onClick={() => setShowSidebar(false)}
            >
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <ul>
            <li
              className={`mb-2 rounded-lg ${
                activeConversationId === 'new'
                  ? 'bg-gray-700'
                  : 'bg-transparent hover:bg-gray-600 hover:rounded-lg'
              }`}
            >
              <Link
                href={`/chat/new`}
                className="block px-2 py-1 text-gray-300"
                onClick={() => handleLinkClick('new')}
              >
                <AddIcon style={{ fontSize: 'large' }} className="mr-2 mb-1" />
                <span className="text-lg">New Chat</span>
              </Link>
            </li>
            {conversations?.map((conversation) => (
              <li
                key={conversation.id}
                className={`mb-2 rounded-lg ${
                  conversation.id === activeConversationId
                    ? 'bg-gray-700'
                    : 'bg-transparent hover:bg-gray-600 hover:rounded-lg'
                }`}
              >
                <Link
                  href={`/chat/${conversation.id}`}
                  className="block px-2 py-1 text-gray-300"
                  onClick={() => handleLinkClick(conversation.id)}
                >
                  <span className="text-lg">
                    {conversation.title.length > 20
                      ? `${conversation.title.slice(0, 20)}...`
                      : conversation.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
