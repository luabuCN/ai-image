import React from 'react';
import { ImageIcon } from '../icons/ImageIcon';

export const EmptyChat: React.FC = () => (
  <div className="h-full flex items-center justify-center">
    <div className="text-center text-gray-500">
      <ImageIcon />
      <p className="text-lg">开始对话，描述你想要生成的图片</p>
    </div>
  </div>
);