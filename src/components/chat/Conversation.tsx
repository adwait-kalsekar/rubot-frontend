'use client';

import { Message } from '@/types/chat';
import SingleMessage from './SingleMessage';

export default function Conversation({ messages }: { messages: Message[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-950 pr-40 pl-32 max-h-[80vh]">
      {messages.map((msg, idx) => (
        <SingleMessage key={idx} msg={msg} />
      ))}
    </div>
  );
}
