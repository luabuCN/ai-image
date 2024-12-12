import { useState, useCallback, useEffect } from 'react';
import { Message } from '../../types/chat';
import { generateImage } from '../api/imageGeneration';
import toast from 'react-hot-toast';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addMessage = useCallback((content: string, type: 'user' | 'assistant', imageUrl?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      imageUrl,
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const generateImageFromPrompt = useCallback(async (prompt: string) => {
    if (!mounted) return;
    
    setIsLoading(true);
    addMessage(prompt, 'user');

    try {
      const response = await generateImage({ prompt });
      const imageUrl = response.images[0].url;
      addMessage('图片已生成完成！', 'assistant', imageUrl);
      toast.success('图片生成成功！');
    } catch (error) {
      console.error('Error:', error);
      addMessage('抱歉，生成图片时出现错误，请重试。', 'assistant');
      toast.error('生成图片时出错，请重试。');
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, mounted]);

  return {
    messages: mounted ? messages : [],
    isLoading,
    generateImageFromPrompt,
  };
};