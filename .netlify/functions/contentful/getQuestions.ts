import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { createClient } from 'contentful'

import { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_PREVIEW_TOKEN, CONTENTFUL_SPACE_ID, IS_PREVIEW } from '../../../config'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: IS_PREVIEW === 'true' ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN,
  })

  const entries = await client.getEntries()

  return {
    statusCode: 200,
    body: JSON.stringify({ data: entries }),
  };
};

export { handler };