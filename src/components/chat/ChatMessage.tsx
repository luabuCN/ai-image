import React from 'react';
import { Message } from '../../types/chat';
import { GeneratedImage } from '../GeneratedImage';
import { ChatAvatar } from './ChatAvatar';
import { formatTimestamp } from '../../lib/utils/date';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <ChatAvatar isUser={isUser} />
        
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`rounded-2xl px-4 py-2 mb-1
            ${isUser 
              ? 'bg-blue-500 text-white rounded-br-none' 
              : 'bg-white text-gray-800 rounded-bl-none shadow-md'}`}>
            <p className="text-sm">{message.content}</p>
          </div>
          
          {message.imageUrl && (
            <div className="mt-2 max-w-xl">
              <GeneratedImage 
                imageUrl={message.imageUrl} 
                filename={`generated-${message.id}.png`}
              />
            </div>
          )}
          
          <span className="text-xs text-gray-500 mt-1">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};