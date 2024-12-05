export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type Conversation = {
  id: string;
  userId: string;
  title: string;
};

export type MessageResponse = {
  conversationId: string;
  message: Message;
  aiMessage: Message;
};
