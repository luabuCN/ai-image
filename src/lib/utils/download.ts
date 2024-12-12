export const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
    
    return true;
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
};

export const generateFileName = (prompt: string): string => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const sanitizedPrompt = prompt.slice(0, 30).replace(/[^a-z0-9]/gi, '-');
  return `ai-image-${sanitizedPrompt}-${timestamp}.png`;
};