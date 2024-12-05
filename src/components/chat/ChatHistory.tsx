// src/components/Chat/ChatHistory.tsx
'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Conversation } from '@/types/chat';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
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

  const conversationQuery = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const response = await axios.get(CONVERSATIONS_URL);
      const data = response.data;

      return data;
    },
  });

  const conversations: Conversation[] = conversationQuery.data;

  return (
    <div>
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
            className="block px-2 py-1 text-gray-300 "
            onClick={() => setActiveConversationId('new')}
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
              className="block px-2 py-1 text-gray-300 "
              onClick={() => {
                setActiveConversationId(conversation.id);
                router.replace(`chat/${conversation.id}`);
              }}
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
  );
}
