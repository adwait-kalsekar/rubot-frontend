'use client';

import { ChatHistory } from '@/components';
import { useAuth } from '@/provider/authProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

const queryClient = new QueryClient();

function ConversationLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const conversationId = params.id as string;

  const auth = useAuth();
  const isLoggedIn = auth.isAuthenticated;

  // ** Always call hooks before any conditional returns. **
  const [activeConversationId, setActiveConversationId] = useState<
    string | 'new'
  >(conversationId);

  // Handle redirect logic in useEffect
  useEffect(() => {
    // Only redirect when we know the user is definitely not logged in
    if (isLoggedIn === false) {
      redirect('/');
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return null;
  }

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
