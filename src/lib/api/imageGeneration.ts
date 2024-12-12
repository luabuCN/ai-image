import axios from 'axios';

const API_KEY = 'sk-izbhubqwzjotbkalcflwcmcjmegzpmhxxnwbozobkuxibgkr';
const API_URL = 'https://api.siliconflow.cn/v1/images/generations';

export interface ImageGenerationParams {
  prompt: string;
  image_size?: string;
  batch_size?: number;
  seed?: number;
  num_inference_steps?: number;
  guidance_scale?: number;
  prompt_enhancement?: boolean;
}

export const generateImage = async (params: ImageGenerationParams) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'black-forest-labs/FLUX.1-schnell',
        ...params,
        image_size: params.image_size || '1024x1024',
        batch_size: params.batch_size || 2,
        seed: params.seed || 4999999999,
        num_inference_steps: params.num_inference_steps || 25,
        guidance_scale: params.guidance_scale || 10,
        prompt_enhancement: params.prompt_enhancement || false,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};