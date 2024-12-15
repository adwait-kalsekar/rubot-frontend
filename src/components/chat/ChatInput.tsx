'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Message, MessageResponse } from '@/types/chat';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

interface ChatInputProps {
  setMessages: Dispatch<SetStateAction<Message[]>>;
  isLoading: boolean;
  messagesLoadingError: boolean;
  messageMutationError: boolean;
  setMessageError: Dispatch<SetStateAction<boolean>>;
  setGeneratingResponse: Dispatch<SetStateAction<boolean>>;
}

export default function ChatInput({
  setMessages,
  isLoading,
  messagesLoadingError,
  setMessageError,
  setGeneratingResponse,
}: ChatInputProps) {
  const params = useParams();
  const conversationId = params.id as string;
  const router = useRouter();

  const [message, setMessage] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  const queryClient = useQueryClient();

  const messageMutation = useMutation({
    mutationFn: async ({ prompt }: { prompt: string }) => {
      const response = await axios.post(
        `/api/chat/conversations/${conversationId}`,
        {
          prompt,
        }
      );
      return response;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      const messageResponse: MessageResponse = data.data.data;
      queryClient.invalidateQueries({
        queryKey: ['conversation', conversationId],
      });
      setMessageError(false);
      setGeneratingResponse(false);
      router.push(`/chat/${messageResponse.conversationId}`);
    },
    onError: () => {
      setGeneratingResponse(false);
      setMessageError(true);
    },
  });

  const handleSend = () => {
    const prompt = message;

    setMessage('');
    setMessages((prevMessages) => {
      const newMessages = [
        ...prevMessages,
        { id: '', role: 'user', content: prompt } as Message,
      ];
      return newMessages;
    });

    setGeneratingResponse(true);

    messageMutation.mutate({
      prompt,
    });
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
            placeholder={
              isLoading || messageMutation.isPending
                ? 'Generating Response...'
                : 'Type your message...'
            }
            disabled={isLoading || messageMutation.isPending ? true : false}
            value={message}
            onChange={handlePromptChange}
            onKeyDown={(e) => {
              if (message.trim() === '' || e.key !== 'Enter') return;

              const isMac = /Mac/i.test(navigator.platform);

              if ((isMac && e.metaKey) || (!isMac && e.ctrlKey)) {
                handleSend();
              }
            }}
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={
              message.trim() === '' ||
              isLoading ||
              messagesLoadingError ||
              messageMutation.isPending
            }
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

      <div className="bg-gray-950 pt-1 pb-1 justify-center hidden sm:flex">
        <span className="text-gray-500 text-sm">
          Ctrl+Enter (Windows) or Cmd+Enter (MacOS) to ask RUbot
        </span>
      </div>
    </>
  );
}
