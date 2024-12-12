import React, { useState } from 'react';
import { LoadingSpinner } from './icons/LoadingSpinner';
import { AddIcon } from './icons/AddIcon';

interface ImagePromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export const ImagePromptForm: React.FC<ImagePromptFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center bg-white rounded-2xl shadow-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="描述你想要生成的图片..."
          className="w-full p-4 pr-24 rounded-2xl bg-transparent focus:outline-none resize-none"
          rows={1}
          style={{ minHeight: '60px' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-2 h-10 px-4 rounded-xl text-white font-medium
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
            } transition-all duration-200 flex items-center gap-2`}
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span>生成中</span>
            </>
          ) : (
            <>
              <AddIcon />
              <span>生成</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};