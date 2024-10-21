'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Message } from '@/types/chat';
import axios from 'axios';

interface ChatInputProps {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export default function ChatInput({ messages, setMessages }: ChatInputProps) {
  const [message, setMessage] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = async () => {
    const prompt = message;

    setMessage('');
    if (prompt.trim() !== '') {
      setMessages([
        ...messages,
        {
          role: 'user',
          content: prompt,
        },
      ]);
    }

    const response = await axios.post('http://localhost:8080/', { prompt });

    const aiResponse: Message = response.data;

    alert(aiResponse.content);
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setMessage(inputValue);

    // Check for character length and number of lines
    const numberOfLines = inputValue.split('\n').length;
    if (inputValue.length > 100 || numberOfLines > 2) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <>
      <div className="bg-gray-950 p-6 pb-0 flex justify-center">
        <div className="relative flex items-center w-full max-w-4xl">
          <textarea
            className={`w-full p-3 pr-12 bg-gray-700 text-white focus:outline-none resize-none transition-all ${
              isExpanded
                ? 'h-32 overflow-auto rounded-3xl'
                : 'h-12 overflow-hidden rounded-full'
            }`}
            placeholder="Type your message..."
            value={message}
            onChange={handlePromptChange}
            onKeyDown={(e) =>
              message.trim() !== '' &&
              e.key === 'Enter' &&
              e.ctrlKey &&
              handleSend()
            }
            rows={1} // Sets initial height when not expanded
          />
          <button
            onClick={handleSend}
            disabled={message.trim() === ''}
            className={`absolute right-2 rounded-full p-2 ${
              message.trim() === ''
                ? 'bg-gray-400 text-white'
                : 'bg-blue-500 text-white '
            }`}
          >
            <ArrowUpwardIcon />
          </button>
        </div>
      </div>

      <div className="bg-gray-950 pt-1 pb-1 flex justify-center">
        <span className="text-gray-500 text-sm">
          Ctrl+Enter (Windows) or Cmd+Enter (MacOS) to ask RUbot
        </span>
      </div>
    </>
  );
}
