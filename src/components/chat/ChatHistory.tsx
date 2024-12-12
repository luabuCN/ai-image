import React, { useRef, useEffect } from 'react';
import { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { EmptyChat } from './EmptyChat';
import { useAutoScroll } from '../../lib/hooks/useAutoScroll';

interface ChatHistoryProps {
  messages: Message[];
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  useAutoScroll(bottomRef, messages);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.length === 0 ? (
        <EmptyChat />
      ) : (
        messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
};