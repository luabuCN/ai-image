import { useState } from 'react';
import { generateImage } from '../api/imageGeneration';
import { generateFileName } from '../utils/download';
import toast from 'react-hot-toast';

interface UseImageGenerationReturn {
  imageUrl: string | null;
  filename: string;
  isLoading: boolean;
  generateImageFromPrompt: (prompt: string) => Promise<void>;
}

export const useImageGeneration = (): UseImageGenerationReturn => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const generateImageFromPrompt = async (prompt: string) => {
    setIsLoading(true);
    try {
      const response = await generateImage({ prompt });
      setImageUrl(response.images[0].url);
      setFilename(generateFileName(prompt));
      toast.success('图片生成成功！');
    } catch (error) {
      console.error('Error:', error);
      toast.error('生成图片时出错，请重试。');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    imageUrl,
    filename,
    isLoading,
    generateImageFromPrompt,
  };
};