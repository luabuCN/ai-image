import React from 'react';

interface ChatAvatarProps {
  isUser: boolean;
}

export const ChatAvatar: React.FC<ChatAvatarProps> = ({ isUser }) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
      ${isUser ? 'ml-2 bg-blue-500' : 'mr-2 bg-gray-600'}`}
  >
    <span className="text-white text-sm">
      {isUser ? '你' : 'AI'}
    </span>
  </div>
);