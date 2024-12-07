'use client';

import { Message } from '@/types/chat';
import SingleMessage from './SingleMessage';
import { useEffect, useRef } from 'react';

interface ConversationProps {
  messages: Message[];
  isLoading: boolean;
  messagesLoadingError: boolean;
  messageMutationError: boolean;
}

export default function Conversation({
  messages,
  messageMutationError,
}: ConversationProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div
      className="
        flex-1 
        overflow-y-auto 
        bg-gray-950 
        p-4
        sm:p-6 
        md:pr-40 
        md:pl-32
      "
    >
      {messages?.map((message) => (
        <SingleMessage key={message.id} msg={message} />
      ))}
      {messageMutationError && (
        <div className="mb-4 text-right">
          <span className="text-red-600">
            Could not send message! Please try again
          </span>
        </div>
      )}
      <div ref={bottomRef}></div>
    </div>
  );
}
