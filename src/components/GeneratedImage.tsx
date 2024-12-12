import React from 'react';
import { DownloadButton } from './DownloadButton';

interface GeneratedImageProps {
  imageUrl: string;
  filename: string;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ imageUrl, filename }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-shadow duration-200">
      <img
        src={imageUrl}
        alt="AI Generated Image"
        className="w-full h-auto rounded-lg"
      />
      <div className="mt-3 flex justify-end">
        <DownloadButton
          imageUrl={imageUrl}
          filename={filename}
        />
      </div>
    </div>
  );
};