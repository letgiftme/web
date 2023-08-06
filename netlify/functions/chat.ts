import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Give me a random 5 cities around the world' },
    ],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ data: chatCompletion.data }),
  };
};

export { handler };