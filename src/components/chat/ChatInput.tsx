'use client';

import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = () => {
    if (message.trim() !== '') {
      console.log('Sending message:', message);
      setMessage('');
      setIsExpanded(false); // Reset input size after sending
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setMessage(inputValue);
    if (inputValue.length > 100) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <div className="bg-gray-950 p-6 flex justify-center">
      <div className="relative flex items-center w-full max-w-4xl">
        <textarea
          className={`w-full p-3 pr-12 bg-gray-700 text-white focus:outline-none resize-none transition-all ${
            isExpanded
              ? 'h-32 overflow-auto rounded-3xl'
              : 'h-12 overflow-hidden rounded-full'
          }`}
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          rows={1} // Sets initial height when not expanded
        />
        <button
          onClick={handleSend}
          className="absolute bg-gray-900 right-4 rounded-full p-2 text-gray-500"
        >
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  );
}
