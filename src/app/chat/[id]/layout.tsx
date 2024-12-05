'use client';

import { ChatHistory } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const queryClient = new QueryClient();

function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const conversationId = params.id as string;

  const [activeConversationId, setActiveConversationId] = useState<
    string | 'new'
  >(conversationId);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-full">
        {/* Left Panel */}
        <div className="w-1/5 bg-gray-800 p-4 overflow-y-auto md:h-[83vh] lg:h-[86vh]">
          <ChatHistory
            activeConversationId={activeConversationId}
            setActiveConversationId={setActiveConversationId}
          />
        </div>
        {children}
      </div>
    </QueryClientProvider>
  );
}

export default ConversationLayout;
