import React from 'react';
import { downloadImage } from '../lib/utils/download';
import { DownloadIcon } from './icons/DownloadIcon';
import toast from 'react-hot-toast';

interface DownloadButtonProps {
  imageUrl: string;
  filename: string;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  imageUrl,
  filename,
  className = '',
}) => {
  const handleDownload = async () => {
    try {
      await downloadImage(imageUrl, filename);
      toast.success('图片下载成功！');
    } catch (error) {
      toast.error('下载失败，请重试。');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`px-4 py-2 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100
        rounded-lg transition-colors duration-200 flex items-center gap-2 ${className}`}
    >
      <DownloadIcon />
      下载图片
    </button>
  );
};