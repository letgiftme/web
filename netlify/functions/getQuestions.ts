import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { createClient } from 'contentful'

import { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_PREVIEW_TOKEN, CONTENTFUL_SPACE_ID, IS_PREVIEW } from '../../config'


// Example response: 
// {
//   "data": [
//     {
//         "id": "test-id",
//         "title": "What is your favorite activity?",
//         "answers": [
//             {
//                 "id": "test-id",
//                 "title": "Video Games"
//             }
//         ]
//     }
// ]
// }
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  console.log({ CONTENTFUL_PREVIEW_TOKEN })
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: IS_PREVIEW === 'true' ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN,
  })

  const entries = await client.getEntries({ content_type: 'question', limit: 5, select: ['fields.title', 'sys.id', 'fields.answers'] })

  const data = entries.items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    answers: (entry?.fields.answers! as any[]).map((answer: any) => ({
      id: answer.sys.id,
      title: answer.fields.title,
    })) || []
  }))

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};

export { handler };