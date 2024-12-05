'use client';

import { ChatInput, Conversation, NewConversation } from '@/components';
import { Message } from '@/types/chat';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function MessagePage() {
  const params = useParams();
  const conversationId = params.id as string;

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageError, setMessageError] = useState<boolean>(false);

  const messageQuery = useQuery({
    queryKey: ['conversation', conversationId],
    queryFn: async () => {
      if (conversationId === 'new') return [];

      const response = await axios.get(
        `/api/chat/conversations/${conversationId}`
      );

      const data = response.data;

      return data.messages;
    },
  });
  const { data, isLoading, isError } = messageQuery;
  const messagesFromBackend: Message[] = data;

  useEffect(() => {
    setMessages(messagesFromBackend);
  }, [messagesFromBackend]);

  return (
    <div className="w-4/5 flex flex-col md:h-[83vh] lg:h-[86vh]">
      {conversationId === 'new' ? (
        <NewConversation />
      ) : (
        <Conversation
          messages={messages}
          isLoading={isLoading}
          messagesLoadingError={isError}
          messageMutationError={messageError}
        />
      )}
      <ChatInput
        setMessages={setMessages}
        isLoading={isLoading}
        messagesLoadingError={isError}
        messageMutationError={messageError}
        setMessageError={setMessageError}
      />
    </div>
  );
}
export default MessagePage;
