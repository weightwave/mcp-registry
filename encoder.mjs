import { pipeline } from '@xenova/transformers';

let model = null;

const TextEncoder = () => {
  const init = async () => {
    if (!model) {
      model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
  };

  const toEmbedding = async (text) => {
    await init();
    
    const input = Array.isArray(text) ? text : [text];
    const embeddings = await model(input, { pooling: 'mean', normalize: true });
    
    return Array.isArray(text) ? embeddings : embeddings[0];
  };

  return {
    toEmbedding
  };
};

export default TextEncoder;