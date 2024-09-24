import { ChatInput, ChatHistory, Conversation } from '@/components';

export default function ChatPage() {
  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="w-1/5 bg-gray-800 p-4">
        <ChatHistory />
      </div>
      {/* Conversation and Input */}
      <div className="w-4/5 flex flex-col">
        <Conversation />
        <ChatInput />
      </div>
    </div>
  );
}
