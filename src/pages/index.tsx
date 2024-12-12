import { ImagePromptForm } from '../components/ImagePromptForm';
import { ChatHistory } from '../components/chat/ChatHistory';
import { useChat } from '../lib/hooks/useChat';

export default function Home() {
  const { messages, isLoading, generateImageFromPrompt } = useChat();

  return (
    <main className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">AI 图片生成器</h1>
      </header>

      <div className="flex-1 flex flex-col max-w-6xl w-full mx-auto">
        <ChatHistory messages={messages} />
        <div className="px-4 pb-6">
          <ImagePromptForm 
            onSubmit={generateImageFromPrompt} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </main>
  );
}